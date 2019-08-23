import fetch from 'node-fetch';

interface Method {
	name: string;
	argumentType: string;
	description: string;
	returnType: string;
}

interface Service {
	methods: Array<Method>;
	name: string;
	description: string;
}

async function fetchMethods(): Promise<Array<Method>> {
	const response = await fetch('https://upsource.jetbrains.com/~api_doc/json/Service.json');
	const json: { services: Array<Service> } = await response.json();
	return json.services.find(service => service.name === 'UpsourceRPC')!.methods;
}

function generateMethod({ name, argumentType, returnType, description }: Method) {
	let requestParameter = `request: ${argumentType.replace(/^messages\./, 'MessageTypes.')}`;
	if (argumentType === 'messages.VoidMessage') {
		requestParameter = '';
	}

	const fetchFunction = name.match(/^(get|find)/) ? 'get' : 'post';

	return `/**
 * ${description}
 */
export function ${name}(${requestParameter}): Promise<${returnType.replace(/^messages\./, 'MessageTypes.')}> {
	return ${fetchFunction}('${name}'${requestParameter && ', request'});
}`;
}

async function generate() {
	const methods = await fetchMethods();
	const generatedMethods = methods.map(method => generateMethod(method)).join('\n\n');
	return `import { get, post } from './callMethod';
import * as MessageTypes from './MessageTypes';

${generatedMethods}`;
}

generate().then(console.log);

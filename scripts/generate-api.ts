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

	const fetchMethod = name.match(/^(get|find)/) ? 'get' : 'post';

	return `/**
 * ${description}
 */
public ${name}(${requestParameter}): Promise<${returnType.replace(/^messages\./, 'MessageTypes.')}> {
	return this.${fetchMethod}('${name}'${requestParameter && ', request'});
}`;
}

async function generate() {
	const methods = await fetchMethods();
	const generatedMethods = methods
		.map(method =>
			generateMethod(method)
				.split('\n')
				.map(line => '\t' + line)
				.join('\n')
		)
		.join('\n\n');
	return `/**
 * This file is generated using 'yarn generate'.
 */

import BaseApi from './BaseApi';
import * as MessageTypes from './MessageTypes';

export default class UpsourceApi extends BaseApi {
${generatedMethods}
}`;
}

generate().then(console.log);

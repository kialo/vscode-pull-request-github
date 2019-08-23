import fetch from 'node-fetch';

const CATEGORIES = [
	'Misc',
	'Projects',
	'Analytics',
	'Users',
	'FileOrDirectoryContent',
	'IssueTrackers',
	'FindUsages',
	'Ids',
	'QueryAssist',
];

interface EnumValue {
	name: string;
	number: number;
	description?: string;
}

interface EnumDescription {
	name: string;
	description?: string;
	values: Array<EnumValue>;
}

type TypeLabel = 'required' | 'optional' | 'repeated';

interface FieldDescription {
	name: string;
	description?: string;
	label: TypeLabel;
	type: string;
}

interface MessageType {
	name: string;
	fields: Array<FieldDescription>;
}

interface Category {
	enums: Array<EnumDescription>;
	messages: Array<MessageType>;
}

interface GeneratedMessageType {
	name: string;
	code: string;
}

async function fetchCategory(category: string): Promise<Category> {
	const response = await fetch(`https://upsource.jetbrains.com/~api_doc/json/${category}.json`);
	return await response.json();
}

async function collect() {
	const categories = await Promise.all(CATEGORIES.map(fetchCategory));
	return categories.reduce(
		(results, { enums, messages }) => {
			return {
				enums: enums ? results.enums.concat(enums) : results.enums,
				messages: messages ? results.messages.concat(messages) : results.messages,
			};
		},
		{ enums: [], messages: [] } as Category
	);
}

function convertType(type: string) {
	switch (type) {
		case 'String':
			return 'string';
		case 'Int32':
		case 'Int64':
		case 'Float':
			return 'number';
		case 'Bool':
			return 'boolean';
		default:
			return type;
	}
}

function getWrappedType(type: string, label: TypeLabel) {
	return label === 'repeated' ? `Array<${type}>` : type;
}

function generateField({ name, description, type, label }: FieldDescription) {
	const modifier = label === 'optional' ? '?' : '';
	const convertedType = convertType(type);
	const docstring = description ? `\t/** ${description} */\n` : '';
	const code = `${docstring}\t${name}${modifier}: ${getWrappedType(convertedType, label)};`;
	return code;
}

function generateMessageType({ name, fields }: MessageType): GeneratedMessageType {
	const code = `export interface ${name} {
${fields.map(generateField).join('\n')}
}`;
	return { name, code };
}

function generateEnumField({ name, number, description }: EnumValue) {
	const docstring = description ? `\t/** ${description} */\n` : '';
	return `${docstring}\t${name} = ${number},`;
}

function generateEnum({ name, values, description }: EnumDescription) {
	const docstring = description
		? `/**
 * ${description}
 */\n`
		: '';
	const code = `${docstring}export enum ${name} {
${values.map(generateEnumField).join('\n')}
}`;
	return { name, code };
}

collect().then(({ messages, enums }) => {
	const messageTypeCode = messages
		.map(generateMessageType)
		.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
		.map(m => m.code)
		.join('\n\n');
	const enumCode = enums
		.map(generateEnum)
		.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
		.map(en => en.code)
		.join('\n\n');

	console.log(`/**
* This file is generated using 'yarn generate'.
*/

${enumCode}

${messageTypeCode}`);
});

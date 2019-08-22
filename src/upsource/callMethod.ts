import fetch from 'node-fetch';

class UpsourceApiError extends Error {
	constructor(
		message: string,
		public readonly code: number,
		public readonly httpStatus: number,
		public readonly httpStatusText: string
	) {
		super(`${code} ${message}, HTTP ${httpStatus} ${httpStatusText}`);
	}
}

// TODO: Read from config
const config = {
	url: 'https://upsource.kialolabs.com',
	auth: 'Basic <base64 encoded "username:password">',
	project: 'kialo',
};

export default async function callMethod(methodName: string, request?: any): Promise<any> {
	const queryParams = request ? `?params=${encodeURIComponent(JSON.stringify(request))}` : '';
	const response = await fetch(`${config.url}/~rpc/${methodName}${queryParams}`, {
		headers: { Authorization: config.auth },
	});
	const parsed = await response.json();
	if (parsed.error) {
		throw new UpsourceApiError(parsed.error.message, parsed.error.code, response.status, response.statusText);
	} else {
		return parsed.result;
	}
}

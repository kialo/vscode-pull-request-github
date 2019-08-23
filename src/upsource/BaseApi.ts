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

export default class BaseApi {
	// TODO: Is it okay to store this like this?
	private authentication: string;

	constructor(private url: string, username: string, password: string) {
		this.authentication = Buffer.from(`${username}:${password}`).toString('base64');
	}

	private async callMethod(upsourceMethodName: string, httpMethod: string, request?: any): Promise<any> {
		console.debug(`${upsourceMethodName}(${request ? JSON.stringify(request) : ''})`);

		const queryParams = request ? `?params=${encodeURIComponent(JSON.stringify(request))}` : '';
		const response = await fetch(`${this.url}/~rpc/${upsourceMethodName}${queryParams}`, {
			headers: { Authorization: `Basic ${this.authentication}` },
			method: httpMethod,
		});

		const parsed = await response.json();
		if (parsed.error) {
			throw new UpsourceApiError(parsed.error.message, parsed.error.code, response.status, response.statusText);
		} else {
			return parsed.result;
		}
	}

	protected async post(upsourceMethodName: string, request?: any): Promise<any> {
		return this.callMethod(upsourceMethodName, 'POST', request);
	}

	protected async get(upsourceMethodName: string, request?: any): Promise<any> {
		return this.callMethod(upsourceMethodName, 'GET', request);
	}
}

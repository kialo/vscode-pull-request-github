import fetch from 'node-fetch';
import Logger from '../common/logger';

export class UpsourceApiError extends Error {
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
	constructor(
		private upsourceHost: string,
		/**
		 * Base64 encoded "<username>:<password>".
		 */
		private authentication: string,
	) {
	}

	private async callMethod(upsourceMethodName: string, httpMethod: string, request?: any): Promise<any> {
		Logger.debug(`${upsourceMethodName}(${request ? JSON.stringify(request) : ''})`, 'BaseApi');

		const queryParams = request ? `?params=${encodeURIComponent(JSON.stringify(request))}` : '';
		const response = await fetch(`${this.upsourceHost}/~rpc/${upsourceMethodName}${queryParams}`, {
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

	protected post(upsourceMethodName: string, request?: any): Promise<any> {
		return this.callMethod(upsourceMethodName, 'POST', request);
	}

	protected get(upsourceMethodName: string, request?: any): Promise<any> {
		return this.callMethod(upsourceMethodName, 'GET', request);
	}
}

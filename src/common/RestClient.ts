import fetch from 'isomorphic-fetch';
import { RequestMethod, UnlApiConfig } from '../models';
import { prepareUrl } from './utils';

const BASE_URL = 'https://sandbox.api.unl.global/v1/';

export default class RestClient {
  public readonly apiKey: string;

  constructor(configuration: UnlApiConfig) {
    this.apiKey = configuration.apiKey;
  }

  public get<T>(url: string, urlParameterMap?: object, queryStringParameters?: object): Promise<T> {
    return this.request(RequestMethod.GET, url, urlParameterMap, queryStringParameters);
  }

  private async request<T>(
    method: string,
    url: string,
    urlParameterMap?: object,
    queryStringParameters?: object
  ): Promise<any> {
    const requestUrl = prepareUrl(BASE_URL, url, urlParameterMap, queryStringParameters);

    const request = {
      method: method,
      url: requestUrl.toString(),
      headers: {
        'x-unl-api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
    };

    const response = await (await fetch!(url, request)).text();

    if (response.length === 0) {
      return undefined;
    }

    try {
      const jsonResponse = JSON.parse(response);
      if (jsonResponse.data && jsonResponse.data.result) {
        return jsonResponse.data.result;
      }

      return undefined;
    } catch (error) {
      //TODO: define and build errors
      console.log(error);
    }
  }
}

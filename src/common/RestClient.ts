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

  public post<T>(url: string, urlParameterMap?: object, body?: object): Promise<T> {
    return this.request(RequestMethod.POST, url, urlParameterMap, body);
  }

  public put<T>(url: string, urlParameterMap?: object, body?: object): Promise<T> {
    return this.request(RequestMethod.PUT, url, urlParameterMap, body);
  }

  public delete<T>(url: string, urlParameterMap?: object): Promise<T> {
    return this.request(RequestMethod.PUT, url, urlParameterMap);
  }

  private async request<T>(
    method: string,
    url: string,
    urlParameterMap?: object,
    queryStringParameters?: object,
    body?: object
  ): Promise<any> {
    const requestUrl = prepareUrl(BASE_URL, url, urlParameterMap, queryStringParameters);

    const request = {
      method: method,
      headers: {
        'x-unl-api-key': this.apiKey,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    };

    return fetch(requestUrl.toString(), request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          response
            .json()
            .then((res) => {
              throw res;
            })
            .catch((ex) => {
              throw ex;
            });
        } else if (response.status === 204) {
          return null;
        } else if (response.status === 200) {
          return response.json();
        } else {
          return null;
        }
      })
      .catch((ex) => {
        throw ex;
      });
  }
}

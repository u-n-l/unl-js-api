/**
 * @classdesc Represents the UNL API
 * @class
 */

import UnlApiConfig from './models/UnlApiConfig';

export default class UnlApi {
  private readonly apiKey: string;

  constructor(configuration: UnlApiConfig) {
    this.apiKey = configuration.apiKey;
  }
}

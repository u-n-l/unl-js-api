import { UnlApiConfig } from './models/UnlApiConfig';
import RecordsApi from './records/RecordsApi';

/**
 * @classdesc Represents the UNL API
 * @class
 */
export default class UnlApi {
  public readonly recordsApi: RecordsApi;

  constructor(configuration: UnlApiConfig) {
    this.recordsApi = new RecordsApi(configuration);
  }
}

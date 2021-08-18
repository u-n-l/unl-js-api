import { UnlApiConfig } from '../models';
import RestClient from './RestClient';

export class BaseAPI {
  protected restClient: RestClient;

  constructor(configuration: UnlApiConfig) {
    this.restClient = new RestClient(configuration);
  }
}

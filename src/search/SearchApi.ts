import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';

export default class SearchApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }
}

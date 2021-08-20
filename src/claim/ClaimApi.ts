import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { ClaimRequest } from './models/ClaimRequest';
import { Claim } from './models/Claim';

export default class ClaimApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public create(claimRequest: ClaimRequest): Promise<Claim> {
    return this.restClient.post<Claim>('claiming', {}, claimRequest);
  }
}

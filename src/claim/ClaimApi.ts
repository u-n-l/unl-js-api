import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { ClaimRequest } from './models/ClaimRequest';
import { Claim } from './models/Claim';
import { BoundingBox } from './models';

export default class ClaimApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public getAll(): Promise<Claim[]> {
    return this.restClient.get<Claim[]>('claiming');
  }

  public getById(claimId: string): Promise<Claim> {
    const pathParamMap = {
      claim_id: claimId,
    };

    return this.restClient.get<Claim>('claiming/{claim_id}', pathParamMap);
  }

  public getInBoundingBox(boundingBox: BoundingBox): Promise<Claim[]> {
    const stringBoundingBox = `${boundingBox.s},${boundingBox.n},${boundingBox.w},${boundingBox.e}`;

    const pathParamMap = {
      bbox: stringBoundingBox,
    };

    return this.restClient.get<Claim[]>('claiming/search/{bbox}', pathParamMap);
  }

  public update(claimId: string, claimRequest: ClaimRequest): Promise<Claim> {
    const pathParamMap = {
      claim_id: claimId,
    };

    return this.restClient.put<Claim>('claiming/{claim_id}', pathParamMap, claimRequest);
  }

  public delete(claimId: string): Promise<Claim> {
    const pathParamMap = {
      claim_id: claimId,
    };

    return this.restClient.delete<Claim>('claiming/{claim_id}', pathParamMap);
  }

  public create(claimRequest: ClaimRequest): Promise<Claim> {
    return this.restClient.post<Claim>('claiming', {}, claimRequest);
  }

  public refreshChainStatus(body: string[]): Promise<Claim> {
    return this.restClient.post<Claim>('claiming/callback', {}, body);
  }
}

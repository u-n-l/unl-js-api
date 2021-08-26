import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { ClaimRequest } from './models/ClaimRequest';
import { Claim } from './models/Claim';
import { BoundingBox } from './models';

/**
 * ClaimApi class contains all the methods related to claiming locations.
 * @class RoutingApi
 * @extends {BaseAPI}
 */
export default class ClaimApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  /**
   * Get all claims.
   * @returns {Promise<Claim>} An array of Claim objects.
   * @memberof ClaimApi
   */

  public getAll(): Promise<Claim[]> {
    return this.restClient.get<Claim[]>('claiming');
  }

  /**
   * Get a claim by id.
   *
   * @param {string} claimId Id of the requested claim.
   * @return {Promise<Claim>} Requested claim object.
   * @memberof ClaimApi
   */
  public getById(claimId: string): Promise<Claim> {
    const pathParamMap = {
      claim_id: claimId,
    };

    return this.restClient.get<Claim>('claiming/{claim_id}', pathParamMap);
  }

  /**
   * Get all claims within a bounding box.
   *
   * @param {BoundingBox} boundingBox A bounding box to get the claims from.
   * @returns {Promise<Claim[]>} An array of all the claims within the specified bounding box.
   * @memberof ClaimApi
   */
  public getInBoundingBox(boundingBox: BoundingBox): Promise<Claim[]> {
    const stringBoundingBox = `${boundingBox.s},${boundingBox.n},${boundingBox.w},${boundingBox.e}`;

    const pathParamMap = {
      bbox: stringBoundingBox,
    };

    return this.restClient.get<Claim[]>('claiming/search/{bbox}', pathParamMap);
  }

  /**
   * Update a claim.
   *
   * @param {string} claimId Id of the claim to be updated.
   * @param {ClaimRequest} claimRequest ClaimRequest object which represents the updated claim.
   * @returns {Promise<Claim>} Updated claim object.
   * @memberof ClaimApi
   */
  public update(claimId: string, claimRequest: ClaimRequest): Promise<Claim> {
    const pathParamMap = {
      claim_id: claimId,
    };

    return this.restClient.put<Claim>('claiming/{claim_id}', pathParamMap, claimRequest);
  }

  /**
   * Delete a claim.
   *
   * @param {string} claimId Id of the claim to be deleted
   * @returns {Promise<Claim>} Deleted claim object.
   * @memberof ClaimApi
   */
  public delete(claimId: string): Promise<Claim> {
    const pathParamMap = {
      claim_id: claimId,
    };

    return this.restClient.delete<Claim>('claiming/{claim_id}', pathParamMap);
  }

  /**
   * Create a new claim.
   *
   * @param {ClaimRequest} claimRequest ClaimRequest object which represent the new claim to be created.
   * @returns {Promise<Claim>} Newly created claim object.
   * @memberof ClaimApi
   */
  public create(claimRequest: ClaimRequest): Promise<Claim> {
    return this.restClient.post<Claim>('claiming', {}, claimRequest);
  }

  // /**
  //  * Refresh chain status. Make a request to infrinity to get the latest chain_status for a claim and update the UNL DB.
  //  *
  //  * @param body
  //  * @returns
  //  * @memberof ClaimApi
  //  */
  // public refreshChainStatus(body: string[]): Promise<Claim> {
  //   return this.restClient.post<Claim>('claiming/callback', {}, body);
  // }
}

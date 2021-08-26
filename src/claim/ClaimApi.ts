import { BaseAPI } from '../common/BaseApi';
import { PaginationParams, PaginationResponse, UnlApiConfig } from '../models';
import { ClaimRequest } from './models/ClaimRequest';
import { Claim } from './models/Claim';
import { BoundingBox } from './models';

/**
 * ClaimApi class contains all the methods related to claiming locations.
 * @class ClaimApi
 * @extends {BaseAPI}
 */
export default class ClaimApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  /**
   * Create a new claim.
   *
   * @param {ClaimRequest} claimRequest ClaimRequest object which represent the new claim to be created.
   * @returns {Promise<Claim>} A promise that, in case of success, returns the newly created claim object.
   * @memberof ClaimApi
   */
  public create(claimRequest: ClaimRequest): Promise<Claim> {
    return this.restClient.post<Claim>('claiming', {}, claimRequest);
  }

  /**
   * Get all claims.
   * @returns {Promise<Claim>} A promise that, in case of success, returns an array of Claim objects.
   * @memberof ClaimApi
   */

  public getAll(): Promise<Claim[]> {
    return this.restClient.get<Claim[]>('claiming');
  }

  /**
   * Get a claim by id.
   *
   * @param {string} claimId Id of the requested claim.
   * @return {Promise<Claim>} A promise that, in case of success, returns the requested claim object.
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
   * @returns {Promise<PaginationResponse<Claim>>} A promise that, in case of success, returns an array of all the claims within the specified bounding box, wrapped around a PaginationResponse object.
   * @memberof ClaimApi
   */
  public getInBoundingBox(
    boundingBox: BoundingBox,
    paginationParams?: PaginationParams
  ): Promise<PaginationResponse<Claim>> {
    const stringBoundingBox = `${boundingBox.s},${boundingBox.n},${boundingBox.w},${boundingBox.e}`;

    const pathParamMap = {
      bbox: stringBoundingBox,
    };

    return this.restClient.get<PaginationResponse<Claim>>(
      'claiming/search/{bbox}',
      pathParamMap,
      paginationParams
    );
  }

  /**
   * Update a claim.
   *
   * @param {string} claimId Id of the claim to be updated.
   * @param {ClaimRequest} claimRequest ClaimRequest object which represents the updated claim.
   * @returns {Promise<Claim>} A promise that, in case of success, returns the updated claim object.
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
   * @returns {Promise<Claim>} A promise that, in case of success, returns the deleted claim object.
   * @memberof ClaimApi
   */
  public delete(claimId: string): Promise<Claim> {
    const pathParamMap = {
      claim_id: claimId,
    };

    return this.restClient.delete<Claim>('claiming/{claim_id}', pathParamMap);
  }
}

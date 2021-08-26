import { UnlApiConfig } from './models/UnlApiConfig';
import ClaimApi from './claim/ClaimApi';
import RecordsApi from './records/RecordsApi';
import RoutingApi from './routing/RoutingApi';
import SearchApi from './search/SearchApi';
import VenuesApi from './venues/VenuesApi';

/**
 * Represents the UNL API
 * @class UnlApi
 */
export default class UnlApi {
  /**
   * Instantiate the UnlApi class
   * @param {UnlApiConfig} configuration Configuration object which contains the api key.
   */
  constructor(configuration: UnlApiConfig) {
    this.claimApi = new ClaimApi(configuration);
    this.recordsApi = new RecordsApi(configuration);
    this.routingApi = new RoutingApi(configuration);
    this.searchApi = new SearchApi(configuration);
    this.venuesApi = new VenuesApi(configuration);
  }

  /**
   * Claim API.
   */
  public readonly claimApi: ClaimApi;
  /**
   * Records API.
   */
  public readonly recordsApi: RecordsApi;
  /**
   * Routing API.
   */
  public readonly routingApi: RoutingApi;
  /**
   * Search API.
   */
  public readonly searchApi: SearchApi;
  /**
   * Venues API.
   */
  public readonly venuesApi: VenuesApi;
}

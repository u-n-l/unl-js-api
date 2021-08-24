import { UnlApiConfig } from './models/UnlApiConfig';
import ClaimApi from './claim/ClaimApi';
import RecordsApi from './records/RecordsApi';
import RoutingApi from './routing/RoutingApi';
import SearchApi from './search/SearchApi';
import VenuesApi from './venues/VenuesApi';

/**
 * @classdesc Represents the UNL API
 * @class
 */
export default class UnlApi {
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

  constructor(configuration: UnlApiConfig) {
    this.claimApi = new ClaimApi(configuration);
    this.recordsApi = new RecordsApi(configuration);
    this.routingApi = new RoutingApi(configuration);
    this.searchApi = new SearchApi(configuration);
    this.venuesApi = new VenuesApi(configuration);
  }
}

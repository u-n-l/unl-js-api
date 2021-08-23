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
  public readonly claimApi: ClaimApi;
  public readonly recordsApi: RecordsApi;
  public readonly routingApi: RoutingApi;
  public readonly searchApi: SearchApi;
  public readonly venuesApi: VenuesApi;

  constructor(configuration: UnlApiConfig) {
    this.claimApi = new ClaimApi(configuration);
    this.recordsApi = new RecordsApi(configuration);
    this.routingApi = new RoutingApi(configuration);
    this.searchApi = new SearchApi(configuration);
    this.venuesApi = new VenuesApi(configuration);
  }
}

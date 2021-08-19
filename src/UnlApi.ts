import { UnlApiConfig } from './models/UnlApiConfig';
import ClaimingApi from './claiming/ClaimingApi';
import RecordsApi from './records/RecordsApi';
import RoutingApi from './routing/RoutingApi';
import SearchApi from './search/SearchApi';
import VenuesApi from './venues/VenuesApi';

/**
 * @classdesc Represents the UNL API
 * @class
 */
export default class UnlApi {
  public readonly recordsApi: RecordsApi;
  public readonly claimingApi: ClaimingApi;
  public readonly routingApi: RoutingApi;
  public readonly searchApi: SearchApi;
  public readonly venuesApi: VenuesApi;

  constructor(configuration: UnlApiConfig) {
    this.recordsApi = new RecordsApi(configuration);
    this.claimingApi = new ClaimingApi(configuration);
    this.routingApi = new RoutingApi(configuration);
    this.searchApi = new SearchApi(configuration);
    this.venuesApi = new VenuesApi(configuration);
  }
}

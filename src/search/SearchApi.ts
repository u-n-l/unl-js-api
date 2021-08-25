import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { SearchQueryParams } from './models/SearchQueryParams';

export default class SearchApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public search(
    projectId: string,
    searchQueryParams: SearchQueryParams
  ): Promise<GeoJSON.FeatureCollection> {
    const customHeader = {
      'x-unl-project-id': projectId,
    };

    return this.restClient.get<GeoJSON.FeatureCollection>(
      'search',
      {},
      searchQueryParams,
      false,
      customHeader
    );
  }
}

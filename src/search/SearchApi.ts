import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { SearchQueryParams } from './models/SearchQueryParams';

/**
 * SearchApi class contains all the methods related to search.
 * @class SearchApi
 * @extends {BaseAPI}
 */
export default class SearchApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  /**
   *  Search for records uploaded to a project.
   *
   * @param {string} projectId Id of the project which contains the searched records.
   * @param {SearchQueryParams} searchQueryParams SearchQueryParam object which contains the search input, coordinates and radius of the searched area.
   * @return {Promise<GeoJSON.FeatureCollection>} FeatureCollection representing the search results.
   * @memberof SearchApi
   */
  public search(searchQueryParams: SearchQueryParams): Promise<GeoJSON.FeatureCollection> {
    return this.restClient.get<GeoJSON.FeatureCollection>('search', {}, searchQueryParams);
  }
}

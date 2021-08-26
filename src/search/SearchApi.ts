import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { SearchParams } from './models/SearchParams';

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
   *  Search for records belonging to a project.
   *
   * @param {string} projectId Id of the project which contains the searched records.
   * @param {SearchParams} searchParams SearchParams object which contains the search input, coordinates and radius of the searched area.
   * @return {Promise<GeoJSON.FeatureCollection>} A promise that, in case of success, returns the FeatureCollection object representing the search results.
   * @memberof SearchApi
   */
  public search(projectId: string, searchParams: SearchParams): Promise<GeoJSON.FeatureCollection> {
    const customHeader = {
      'x-unl-project-id': projectId,
    };

    return this.restClient.get<GeoJSON.FeatureCollection>(
      'search',
      {},
      searchParams,
      false,
      customHeader
    );
  }
}

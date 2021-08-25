import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { RouteRequest } from './models/RouteRequest';
import { Route } from './models/Route';

/**
 * RoutingApi class contains all the methods related to routing.
 * @class RoutingApi
 * @extends {BaseAPI}
 */
export default class RoutingApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  /**
   * Request a route.
   *
   * @param {string} projectId Id of the project to request a route for.
   * @param {RouteRequest} routeRequest RouteRequest object to specify the waypoints of the requested route.
   * @return {Promise<Route>} A promise that, in case of success, returns the requested route object.
   * @memberof RoutingApi
   */
  public route(projectId: string, routeRequest: RouteRequest): Promise<Route> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient.post<Route>('routing/{project_id}', pathParamMap, routeRequest);
  }
}

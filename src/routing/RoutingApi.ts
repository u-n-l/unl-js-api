import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { RouteRequest } from './models/RouteRequest';
import { Route } from './models/Route';

export default class RoutingApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public route(projectId: string, routeRequest: RouteRequest): Promise<Route> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient.post<Route>('routing/{project_id}', pathParamMap, routeRequest);
  }
}

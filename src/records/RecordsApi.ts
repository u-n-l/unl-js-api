import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';

export default class RecordsApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public getAllByProjectId(projectId: string): Promise<any> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient
      .get<any>('projects/{project_id}/records?limit=10&offset=0', pathParamMap)
      .then((response) => {
        return response;
      });
  }
}

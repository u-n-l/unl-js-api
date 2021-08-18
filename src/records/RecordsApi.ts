import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';

export default class RecordsApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public getAllByProjectId(projectId: string): Promise<any> {
    const pathParamMap = {
      projectId,
    };

    return this.restClient
      .get<any>('projects/{projectId}/records', pathParamMap)
      .then((response) => {
        return response;
      });
  }
}

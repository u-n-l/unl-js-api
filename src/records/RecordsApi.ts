import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { PaginationQueryParams } from '../models/PaginationQueryParams';
import { PaginationResponse } from '../models/PaginationResponse';
import { Record } from './models/Record';

export default class RecordsApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public getAllByProjectId(
    projectId: string,
    paginationQueryParams: PaginationQueryParams
  ): Promise<PaginationResponse<Record>> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient
      .get<PaginationResponse<Record>>(
        'projects/{project_id}/records',
        pathParamMap,
        paginationQueryParams
      )
      .then((response) => {
        return response;
      });
  }
}

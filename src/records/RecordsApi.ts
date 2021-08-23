import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { PaginationQueryParams } from '../models/PaginationQueryParams';
import { PaginationResponse } from '../models/PaginationResponse';
import { Record } from './models/Record';

export default class RecordsApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public getAll(
    projectId: string,
    paginationQueryParams: PaginationQueryParams
  ): Promise<PaginationResponse<Record>> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient.get<PaginationResponse<Record>>(
      'projects/{project_id}/records',
      pathParamMap,
      paginationQueryParams
    );
  }

  public getById(projectId: string, recordId: string): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.get<Record>('projects/{project_id}/records/{record_id}', pathParamMap);
  }

  public delete(projectId: string, recordId: string): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.delete<Record>(
      'projects/{project_id}/records/{record_id}',
      pathParamMap
    );
  }

  public update(projectId: string, recordId: string, geojson: GeoJSON.Feature): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.put<Record>(
      'projects/{project_id}/records/{record_id}',
      pathParamMap,
      geojson
    );
  }

  public create(projectId: string, geojson: GeoJSON.Feature): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient.post<Record>('projects/{project_id}/records', pathParamMap, geojson);
  }

  public getChildren(
    projectId: string,
    recordId: string,
    paginationQueryParams: PaginationQueryParams
  ): Promise<PaginationResponse<Record>> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.get<PaginationResponse<Record>>(
      'projects/{project_id}/records/{record_id}',
      pathParamMap,
      paginationQueryParams
    );
  }

  public createChild(
    projectId: string,
    recordId: string,
    geojson: GeoJSON.Feature
  ): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.post<Record>(
      'projects/{project_id}/records/{record_id}',
      pathParamMap,
      geojson
    );
  }

  // public move(projectId: string, recordId: string): Promise<Record> {
  //   const pathParamMap = {
  //     project_id: projectId,
  //     record_id: recordId,
  //   };

  //   return this.restClient.post<Record>(
  //     'projects/{project_id}/records/{record_id}',
  //     pathParamMap,
  //     {}
  //   );
  // }
}

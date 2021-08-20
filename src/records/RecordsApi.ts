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

  public update(projectId: string, recordId: string, feature: GeoJSON.Feature): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.put<Record>('projects/{project_id}/records/{record_id}', pathParamMap, {
      geojson: feature,
    });
  }

  public create(projectId: string, feature: GeoJSON.Feature): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient.post<Record>('projects/{project_id}/records', pathParamMap, {
      geojson: feature,
    });
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

  public createChildren(
    projectId: string,
    recordId: string,
    feature: GeoJSON.Feature
  ): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.post<Record>('projects/{project_id}/records/{record_id}', pathParamMap, {
      geojson: feature,
    });
  }

  public move(projectId: string, recordId: string): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.post<Record>(
      'projects/{project_id}/records/{record_id}',
      pathParamMap,
      {}
    );
  }
}

import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { PaginationParams } from '../models/PaginationParams';
import { PaginationResponse } from '../models/PaginationResponse';
import { Record } from './models/Record';

/**
 * RecordsApi class contains all the methods related to records.
 * @class RecordsApi
 * @extends {BaseAPI}
 */
export default class RecordsApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  /**
   * Get all records that belong to a project.
   *
   * @param {string} projectId Id of the project to get all the records from.
   * @param {PaginationParams} paginationParams Pagination information to decide the limit and the offset of the records list.
   * @return {Promise<PaginationResponse<Record>>} A promise that, in case of success, returns the records wrapped around a PaginationResponse object.
   * @memberof RecordsApi
   */
  public getAll(
    projectId: string,
    paginationParams: PaginationParams
  ): Promise<PaginationResponse<Record>> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient.get<PaginationResponse<Record>>(
      'projects/{project_id}/records',
      pathParamMap,
      paginationParams
    );
  }

  /**
   * Get a record object by id.
   *
   * @param {string} projectId Id of the project to get the record from.
   * @param {string} recordId Id of the record to be fetched.
   * @return {Promise<Record>} A promise that, in case of success, returns the requested record object.
   * @memberof RecordsApi
   */
  public getById(projectId: string, recordId: string): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.get<Record>('projects/{project_id}/records/{record_id}', pathParamMap);
  }

  /**
   * Delete a record by id.
   *
   * @param {string} projectId Id of the project to delete the record from.
   * @param {string} recordId Id of the record to be deleted.
   * @return {Promise<Record>} A promise that, in case of success, returns the deleted record object.
   * @memberof RecordsApi
   */
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

  /**
   * Update a record by id.
   *
   * @param {string} projectId Id of the project to update the record from.
   * @param {string} recordId Id of the record to be updated.
   * @param {GeoJSON.Feature} feature Updated record feature.
   * @return {Promise<Record>} A promise that, in case of success, returns the updated record object.
   * @memberof RecordsApi
   */
  public update(projectId: string, recordId: string, feature: GeoJSON.Feature): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.put<Record>('projects/{project_id}/records/{record_id}', pathParamMap, {
      geojson: feature,
    });
  }

  /**
   * Create a new record.
   *
   * @param {string} projectId Id of the project the created record will belong to.
   * @param {GeoJSON.Feature} feature Created record feature.
   * @return {Promise<Record>} A promise that, in case of success, returns the created record object.
   * @memberof RecordsApi
   */
  public create(projectId: string, feature: GeoJSON.Feature): Promise<Record> {
    const pathParamMap = {
      project_id: projectId,
    };

    return this.restClient.post<Record>('projects/{project_id}/records', pathParamMap, {
      geojson: feature,
    });
  }

  /**
   * Get the children of a record object.
   *
   * @param {string} projectId Id of the project the parent record is belonging to.
   * @param {GeoJSON.Feature} recordId Id of the parent record.
   * @param {PaginationParams} paginationParams Pagination information to decide the limit and the offset of the children list.
   * @return {Promise<PaginationResponse<Record>>} A promise that, in case of success, returns the child records wrapped around a PaginationResponse object.
   * @memberof RecordsApi
   */
  public getChildren(
    projectId: string,
    recordId: string,
    paginationParams: PaginationParams
  ): Promise<PaginationResponse<Record>> {
    const pathParamMap = {
      project_id: projectId,
      record_id: recordId,
    };

    return this.restClient.get<PaginationResponse<Record>>(
      'projects/{project_id}/records/{record_id}',
      pathParamMap,
      paginationParams
    );
  }

  /**
   * Create a new record and make it the child of another record.
   *
   * @param {string} projectId Id of the project the created record will belong to.
   * @param {GeoJSON.Feature} recordId Id of the parent record.
   * @param {GeoJSON.Feature} feature Created record feature.
   * @return {Promise<Record>} A promise that, in case of success, returns the created record object.
   * @memberof RecordsApi
   */
  public createChild(
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

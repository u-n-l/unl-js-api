import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { ImdfFile } from './models/ImdfFile';
import { ImdfFeatureType } from './models/ImdfFeatureType';
import { Venue } from './models/Venue';

/**
 * VenuesApi class contains all the methods related to imdf venues.
 * @class VenuesApi
 * @extends {BaseAPI}
 */
export default class VenuesApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  /**
   * Upload in archive which contains the imdf files.
   *
   * @param {string} projectId Id of the project where the imdf venue is uploaded.
   * @param {File} imdfArchive Zip archive to be uploaded.
   * @return {Promise<Venue>} A promise that, in case of success, returns the venue object representing the uploaded entity.
   * @memberof VenuesApi
   */
  public uploadImdfArchive(projectId: string, imdfArchive: File): Promise<Venue> {
    const pathParamMap = {
      project_id: projectId,
    };
    let formData = new FormData();
    formData.append('file', imdfArchive);

    return this.restClient.post<Venue>('projects/{project_id}/imdf', pathParamMap, formData, true);
  }

  /**
   * Get all the imdf files associated to a venue.
   *
   * @param {string} projectId Id of the project to get the files from.
   * @param {string} venueId Id of the venue the files are belonging to.
   * @param {ImdfFileType} includedFeatureTypes The list of feature types to be included in the response. If missing, all the files will be included.
   * @return {Promise<ImdfFile>} A promise that, in case of success, returns the requested ImdfFile object.
   * @memberof VenuesApi
   */
  public getImdfFiles(
    projectId: string,
    venueId: string,
    includedFeatureTypes?: ImdfFeatureType[]
  ): Promise<ImdfFile> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
    };
    const queryParams = { type: includedFeatureTypes?.join() };

    return this.restClient.get<ImdfFile>(
      'projects/{project_id}/imdf/{venue_id}',
      pathParamMap,
      queryParams
    );
  }

  /**
   * Download an imdf venue archive.
   *
   * @param {string} projectId Id of the project the venue is belonging to.
   * @param {string} venueId Id of the requested venue.
   * @return {Promise<File>} A promise that, in case of success, returns the zip file representing the requested archive.
   * @memberof VenuesApi
   */
  public downloadImdfArchive(projectId: string, venueId: string): Promise<File> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
    };

    return this.restClient.get<File>(
      'projects/{project_id}/imdf/{venue_id}/zip',
      pathParamMap,
      undefined,
      true
    );
  }

  /**
   * Update an imdf venue archive.
   *
   * @param {string} projectId Id of the project the venue is belonging to.
   * @param {string} venueId Id of the venue to be updated.
   * @param {File} imdfArchive Zip archive representing the updated venue.
   * @return {Promise<Venue>} A promise that, in case of success, returns the venue object representing the updated entity.
   * @memberof VenuesApi
   */
  public updateImdfArchive(projectId: string, venueId: string, imdfArchive: File): Promise<Venue> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
    };
    let formData = new FormData();
    formData.append('file', imdfArchive);

    return this.restClient.put<Venue>(
      'projects/{project_id}/imdf/{venue_id}/zip',
      pathParamMap,
      formData,
      true
    );
  }

  /**
   * Delete an imdf venue.
   *
   * @param {string} projectId Id of the project the venue is belonging to.
   * @param {string} venueId Id of the venue to be deleted.
   * @return {Promise<Venue>} A promise that, in case of success, returns the venue object representing the deleted entity.
   * @memberof VenuesApi
   */
  public delete(projectId: string, venueId: string): Promise<Venue> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
    };

    return this.restClient.delete<Venue>('projects/{project_id}/imdf/{venue_id}', pathParamMap);
  }

  /**
   * Update an ImdfFile which is part of an imdf venue.
   *
   * @param {string} projectId Id of the project the venue is belonging to.
   * @param {string} venueId Id of the venue whose ImdfFile is updated.
   * @param {ImdfFeatureType} featureType Type of the updated ImdfFile.
   * @param {GeoJSON.Feature} feature Updated feature.
   * @return {Promise<ImdfFile>} A promise that, in case of success, returns the updated ImdfFile object.
   * @memberof VenuesApi
   */
  public updateImdfFile(
    projectId: string,
    venueId: string,
    featureType: ImdfFeatureType,
    feature: GeoJSON.Feature
  ): Promise<ImdfFile> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
      type: featureType,
    };

    return this.restClient.put<ImdfFile>(
      'projects/{project_id}/imdf/{venue_id}/types/{type}',
      pathParamMap,
      { geojson: feature }
    );
  }

  /**
   * Get an ImdfFile which is part of an imdf venue.
   *
   * @param {string} projectId Id of the project the venue is belonging to.
   * @param {string} venueId Id of the venue the file is belonging to.
   * @param {ImdfFileType} featureType Type of the requested file.
   * @return {Promise<ImdfFile>} A promise that, in case of success, returns the requested ImdfFile object.
   * @memberof VenuesApi
   */
  public getImdfFile(
    projectId: string,
    venueId: string,
    featureType: ImdfFeatureType
  ): Promise<ImdfFile> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
      type: featureType,
    };

    return this.restClient.get<ImdfFile>(
      'projects/{project_id}/imdf/{venue_id}/types/{type}',
      pathParamMap
    );
  }
}

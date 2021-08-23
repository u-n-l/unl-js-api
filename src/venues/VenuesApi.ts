import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { ImdfFile } from './models/ImdfFile';
import { ImdfFeatureType } from './models/ImdfFeatureType';
import { Venue } from './models/Venue';

export default class VenuesApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public uploadImdfArchive(projectId: string, imdfArchive: File): Promise<Venue> {
    const pathParamMap = {
      project_id: projectId,
    };
    let formData = new FormData();
    formData.append('file', imdfArchive);

    return this.restClient.post<Venue>('projects/{project_id}/imdf', pathParamMap, formData);
  }

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

  public delete(projectId: string, venueId: string): Promise<Venue> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
    };

    return this.restClient.delete<Venue>('projects/{project_id}/imdf/{venue_id}', pathParamMap);
  }

  public updateImdfFile(
    projectId: string,
    venueId: string,
    featureType: ImdfFeatureType,
    geojson: object
  ): Promise<ImdfFile> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
      type: featureType,
    };

    return this.restClient.put<ImdfFile>(
      'projects/{project_id}/imdf/{venue_id}/types/{type}',
      pathParamMap,
      geojson
    );
  }

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

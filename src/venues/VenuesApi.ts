import { BaseAPI } from '../common/BaseApi';
import { UnlApiConfig } from '../models';
import { ImdfFile } from './models/ImdfFile';
import { ImdfVenueComponentType } from './models/ImdfVenueComponentType';
import { Venue } from './models/Venue';

export default class VenuesApi extends BaseAPI {
  constructor(configuration: UnlApiConfig) {
    super(configuration);
  }

  public create(projectId: string, venueZipFile: File): Promise<Venue> {
    const pathParamMap = {
      project_id: projectId,
    };
    let formData = new FormData();
    formData.append('file', venueZipFile);

    return this.restClient.post<Venue>('projects/{project_id}/imdf', pathParamMap, formData);
  }

  public getById(projectId: string, venueId: string): Promise<ImdfFile> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
    };

    return this.restClient.get<ImdfFile>('projects/{project_id}/imdf/{venue_id}', pathParamMap);
  }

  public delete(projectId: string, venueId: string): Promise<Venue> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
    };

    return this.restClient.delete<Venue>('projects/{project_id}/imdf/{venue_id}', pathParamMap);
  }

  public updateVenueComponent(
    projectId: string,
    venueId: string,
    type: ImdfVenueComponentType,
    geojson: object
  ): Promise<ImdfFile> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
      type: type,
    };

    return this.restClient.put<ImdfFile>(
      'projects/{project_id}/imdf/{venue_id}/types/{type}',
      pathParamMap,
      geojson
    );
  }

  public getVenueComponentByType(
    projectId: string,
    venueId: string,
    type: ImdfVenueComponentType
  ): Promise<ImdfFile> {
    const pathParamMap = {
      project_id: projectId,
      venue_id: venueId,
      type: type,
    };

    return this.restClient.get<ImdfFile>(
      'projects/{project_id}/imdf/{venue_id}/types/{type}',
      pathParamMap
    );
  }
}

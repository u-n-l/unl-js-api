import { IdentityType } from './IdentityType';

/**
 * The type representing a record.
 * @alias Record
 */
export type Record = {
  /**
   * Id of the record's parent.
   */
  parentId?: string;
  /**
   * Id of the record.
   */
  recordId: string;
  /**
   * Id of the user who created the record.
   */
  createdByUserId: string;
  /**
   * Identity type of the record creator.
   */
  identityType: IdentityType;
  /**
   * Geojson object which contains the GeoJSON.Feature of the record.
   */
  geojson: object;
  /**
   * Record's latitude.
   */
  latitude: number;
  /**
   * Record's longitude.
   */
  longitude: number;
  /**
   * Record's geohash.
   */
  geohash: string;
  /**
   * The date when the record was created.
   */
  createdAt: Date;
  /**
   * The date when the record was last updated.
   */
  updatedAt: Date;
  /**
   * The venueId, in case the record is a venue.
   */
  venueId?: string;
};

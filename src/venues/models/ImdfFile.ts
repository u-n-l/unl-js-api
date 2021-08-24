import { ImdfFeatureType } from './ImdfFeatureType';

/**
 * The type representing an imdf venue component.
 * @alias ImdfFile
 */
export type ImdfFile = {
  /**
   * Id of the ImdfFile.
   */
  id: string;
  /**
   * Type of the ImdfFile.
   */
  type: ImdfFeatureType;
  /**
   * Geojson object representing the ImdfFile.
   */
  geojson: GeoJSON.FeatureCollection;
  /**
   * The date when the ImdfFile was created.
   */
  createdAt: Date;
  /**
   * The date when the ImdfFile was last updated.
   */
  updatedAt: Date;
  /**
   * Id of the venue the file is belonging to.
   */
  venueId: string;
};

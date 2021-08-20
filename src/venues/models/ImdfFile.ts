import { ImdfFeatureType } from './ImdfFeatureType';

export type ImdfFile = {
  id: string;
  type: ImdfFeatureType;
  geojson: GeoJSON.FeatureCollection;
  createdAt: Date;
  updatedAt: Date;
  venueId: string;
};

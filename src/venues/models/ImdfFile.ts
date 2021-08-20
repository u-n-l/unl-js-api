export type ImdfFile = {
  id: string;
  type: string;
  geojson: GeoJSON.FeatureCollection;
  createdAt: Date;
  updatedAt: Date;
  venueId: string;
};

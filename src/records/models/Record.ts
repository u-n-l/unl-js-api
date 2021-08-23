import { IdentityType } from './IdentityType';

export type Record = {
  parentId?: string;
  recordId: string;
  createdByUserId: string;
  identityType: IdentityType;
  geojson: object;
  latitude: number;
  longitude: number;
  geohash: string;
  createdAt: Date;
  updatedAt: Date;
  venueId?: string;
};

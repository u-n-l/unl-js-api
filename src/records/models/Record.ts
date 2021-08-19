import { IdentityTypeEnum } from './IdentityTypeEnum';

export type Record = {
  parentId?: string;
  recordId: string;
  createdByUserId: string;
  identityType: IdentityTypeEnum;
  geojson: object;
  latitude: number;
  longitude: number;
  geohash: string;
  createdAt: Date;
  updatedAt: Date;
  venueId?: string;
};

import { IdentityType } from '../../records/models';

export type Venue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  projectId: string;
  createdByUserId: string;
  identityType: IdentityType;
};

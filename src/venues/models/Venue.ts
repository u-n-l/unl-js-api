import { IdentityType } from '../../records/models';

/**
 * The type representing a venue object.
 * @alias Venue
 */
export type Venue = {
  /**
   * Id of the venue.
   */
  id: string;
  /**
   * The date when the venue was created.
   */
  createdAt: Date;
  /**
   * The date when the venue was last updated.
   */
  updatedAt: Date;
  /**
   * Id of the project the venue is belonging to.
   */
  projectId: string;
  /**
   * Id of the user who created the record.
   */
  createdByUserId: string;
  /**
   * Identity type of the venue creator.
   */
  identityType: IdentityType;
};

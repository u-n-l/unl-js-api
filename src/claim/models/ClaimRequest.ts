/**
 * Type representing a claim request.
 * @alias ClaimRequest
 */

export type ClaimRequest = {
  /**
   * The cell or cluster id to be claimed.
   */
  location: string;
  /**
   * The custom address of the location being claimed.
   */
  address: string;
  /**
   * The expiration date of the claim, between 2 and 29 days from the current date. If blank, 7 days from the current date.
   */
  expiry: Date;
  /**
   * Optional: if this is provided we will append to the user id field in infrinity.
   */
  externalUserId: string;
};

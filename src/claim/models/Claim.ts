import { ChainStatus } from './ChainStatus';

/**
 * Type representing a claim.
 * @alias Claim
 */

export type Claim = {
  /**
   * The unique id of the registered claim'.
   */
  claimId: string;
  /**
   * Blockchain verification status.
   */
  chainStatus: ChainStatus | null;
  /**
   * The id of the transaction on the Infrinity blockchain.
   */
  transactionId: string;
  /**
   * The block id for the claim on the Infrinity blockchain.
   */
  blockId: string;
  /**
   * The custom address of the location being claimed.
   */
  address: string;
  /**
   * Optional id representing a user in an external system.
   */
  externalUserId?: string;
  /**
   * The cell or cluster id to be claimed.
   */
  location: string;
  /**
   * The expiration date of the claim.
   */
  expiry: Date;
};

import { ChainStatus } from './ChainStatus';

export type Claim = {
  claimId: string;
  chainStatus: ChainStatus | null;
  transactionId: string;
  blockId: string;
  address: string;
  location: string;
  expiry: Date;
};

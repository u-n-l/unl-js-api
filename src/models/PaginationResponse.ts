/**
 * The type representing the configuration necessary to initialize the SDK.
 * @alias PaginationResponse
 */
export type PaginationResponse<T> = {
  /**
   * Truth value whether there are more items other than the ones returned in the request.
   */
  hasMore: boolean;
  /**
   * The number of requested items.
   */
  limit: number;
  /**
   * Requested items.
   */
  items: T[];
};

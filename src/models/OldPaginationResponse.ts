/**
 * The type representing the configuration necessary to initialize the SDK.
 * @alias OldPaginationResponse
 */
export type OldPaginationResponse<T> = {
  /**
   * Total number of items.
   */
  total: number;
  /**
   * The number of requested items.
   */
  limit: number;
  /**
   * Offset of requested items.
   */
  offset: number;
  /**
   * Requested items.
   */
  items: T[];
};

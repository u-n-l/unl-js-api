/**
 * The type representing the configuration necessary to initialize the SDK.
 * @alias PaginatedResponse
 */
export type PaginatedResponse<T> = {
  /**
   * The number of remaining items.
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

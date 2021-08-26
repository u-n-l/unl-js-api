/**
 * The parameters necessary to request a pagination response.
 * @alias PaginationParams
 */
export type PaginationParams = {
  /**
   * Number of requested items.
   */
  limit: number;
  /**
   * Offset of requested items.
   */
  offset: number;
};

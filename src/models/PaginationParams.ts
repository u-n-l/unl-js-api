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
   * The id of the item we want to use as offset for the requested items.
   */
  lastId?: string;
  /**
   * Bounding box csv string in the format minLongitude, minLatitude, maxLongitude, maxLatitude (E,S,W,N).
   */
  bboxCsv?: string;
};

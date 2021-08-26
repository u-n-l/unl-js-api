/**
 * The type representing the query params used for search.
 * @alias Record
 */
export type SearchParams = {
  /**
   * Search input.
   */
  q: string;
  /**
   * Latitude of center of the area where search is performed.
   */
  lat: number;
  /**
   * Longitude of center of the area where search is performed.
   */
  lon: number;
  /**
   * Optional: radius of the area where search is performed.
   */
  radius?: number;
};

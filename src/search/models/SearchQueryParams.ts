/**
 * The type representing the query params used for search.
 * @alias Record
 */
export type SearchQueryParams = {
  /**
   * Search input.
   */
  q: string;
  /**
   * Latitude.
   */
  lat: number;
  /**
   * Longitude.
   */
  lon: number;
  /**
   * Optional: radius.
   */
  radius?: number;
};

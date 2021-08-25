/**
 * Type representing a the route overview.
 * @alias RouteOverview
 */

export type RouteOverview = {
  /**
   * An array of coordinates in the 'lat,lng' format representing the route shape.
   */
  linestring: string[];
  /**
   * Length of the route (in meters).
   */
  length: number;
  /**
   * Estimated amount of time required to travel the route (in seconds).
   */
  duration: number;
};

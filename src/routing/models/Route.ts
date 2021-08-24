import { RouteOverview } from './RouteOverview';
import { Segment } from './Segment';

/**
 * Type representing a route.
 * @alias Route
 */
export type Route = {
  /**
   * Name of the route.
   */
  name: string;
  /**
   * Route overview.
   */
  overview: RouteOverview;
  /**
   * Route start geohash cell.
   */
  start: string;
  /**
   * Route end geohash cell.
   */
  end: string;
  /**
   * Array of route segments.
   */
  segments: Segment[];
};

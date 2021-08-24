import { CoordinatesWaypoint } from './CoordinatesWaypoint';
import { GeohashWaypoint } from './GeohashWaypoint';
import { IndoorWaypoint } from './IndoorWaypoint';

/**
 * Type representing the body of a routing request.
 * @alias RouteOverview
 */

export type RouteRequest = {
  /**
   * Route preference; eg. 'fastest'
   */
  preference: string;
  /**
   * Array of waypoints the requested route should pass through. Can be coordinates, geohashes or indoor waypoints.
   */
  waypoints: Array<GeohashWaypoint | CoordinatesWaypoint | IndoorWaypoint>;
};

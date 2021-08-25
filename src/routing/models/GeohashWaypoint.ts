import { WaypointType } from './WaypointType';

/**
 * Geohash waypoint used to request a route.
 * @alias GeohashWaypoint
 */
export type GeohashWaypoint = {
  /**
   * Type of geohash waypoint.
   */
  type: WaypointType.GEOHASH;
  /**
   * Geohash cell.
   */
  geohash: string;
};

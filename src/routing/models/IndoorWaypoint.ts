import { WaypointType } from './WaypointType';

/**
 * Indoor waypoint used to request a route which is passing through an indoor location.
 * @alias IndoorWaypoint
 */
export type IndoorWaypoint = {
  /**
   * Type of indoor waypoint.
   */
  type: WaypointType.INDOOR;
  /**
   * Id of the venue the requested route is passing through.
   */
  venueId: string;
  /**
   * Id of the unit the requested route is passing through.
   */
  unitId: string;
  /**
   * Geohash cell the route is passing through.
   */
  geohash: string;
};

import { WaypointType } from './WaypointType';

/**
 * Coordinates waypoint used to request a route.
 * @alias CoordinatesWaypoint
 */
export type CoordinatesWaypoint = {
  /**
   * Type of coordinates waypoint.
   */
  type: WaypointType.POINT;
  /**
   * Coordinates in '[lng,lat]' format.
   */
  coordinates: string;
};

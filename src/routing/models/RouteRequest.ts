import { CoordinatesWaypoint } from './CoordinatesWaypoint';
import { GeohashWaypoint } from './GeohashWaypoint';
import { IndoorWaypoint } from './IndoorWaypoint';

export type RouteRequest = {
  preference: string;
  waypoints: Array<GeohashWaypoint | CoordinatesWaypoint | IndoorWaypoint>;
};

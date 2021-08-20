import { CoordinatesWaypoint } from './CoordinatesWaypoint';
import { GeohashWaypoint } from './GeohashWaypoint';

export type IndoorWaypoint = {
  preference: string;
  waypoints: Array<GeohashWaypoint | CoordinatesWaypoint | IndoorWaypoint>;
};

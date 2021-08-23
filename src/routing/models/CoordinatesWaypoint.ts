import { WaypointType } from './WaypointType';

export type CoordinatesWaypoint = {
  type: WaypointType.POINT;
  coordinates: string;
};

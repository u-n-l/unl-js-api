import { WaypointType } from './WaypointType';

export type IndoorWaypoint = {
  type: WaypointType.INDOOR;
  venueId: string;
  unitId: string;
  geohash: string;
};

import { WaypointType } from './WaypointType';

export type GeohashWaypoint = {
  type: WaypointType.GEOHASH;
  geohash: string;
};

import { WaypointTypeEnum } from './WaypointTypeEnum';

export type IndoorWaypoint = {
  type: WaypointTypeEnum.INDOOR;
  venueId: string;
  unitId: string;
  geohash: string;
};

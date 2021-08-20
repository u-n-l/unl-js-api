import { WaypointTypeEnum } from './WaypointTypeEnum';

export type GeohashWaypoint = {
  type: WaypointTypeEnum.GEOHASH;
  geohash: string;
};

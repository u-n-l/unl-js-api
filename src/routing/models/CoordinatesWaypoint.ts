import { WaypointTypeEnum } from './WaypointTypeEnum';

export type CoordinatesWaypoint = {
  type: WaypointTypeEnum.POINT;
  coordinates: string;
};

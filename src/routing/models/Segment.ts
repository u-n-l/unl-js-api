import { Instruction } from './Instruction';
import { SpeedLimitUnit } from './SpeedLimitUnit';

export type Segment = {
  point: string;
  length: number;
  duration: number;
  maxHeight: number;
  speedLimit: number;
  speedLimitUnit: SpeedLimitUnit;
  roadName: string;
  instruction: Instruction;
  text: string;
};

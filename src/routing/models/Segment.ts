import { Instruction } from './Instruction';
import { SpeedLimitUnit } from './SpeedLimitUnit';

/**
 * Type representing the segment of a route.
 * @alias Segment
 */

export type Segment = {
  /**
   * Segment geohash.
   */
  point: string;
  /**
   * Length of the segment (in meters).
   */
  length: number;
  /**
   * Estimated amount of time required to travel the segment (in seconds).
   */
  duration: number;
  /**
   * A known height restriction (in meters).
   */
  maxHeight: number;
  /**
   * A known speed limit on the segment.
   */
  speedLimit: number;
  /**
   * Unit of speed limit.
   */
  speedLimitUnit: SpeedLimitUnit;
  /**
   * Name of the road associated to this segment.
   */
  roadName: string;
  /**
   * An instruction for the maneuver at the end of the segment.
   */
  instruction: Instruction;
  /**
   * Textual instrucation for the current maneuver.
   */
  text: string;
};

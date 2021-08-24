/**
 * The type representing a map bounding box.
 * @alias BoundingBox
 */
export type BoundingBox = {
  /**
   * north coordinate of the bounding box (max latitude)
   */
  n: number;
  /**
   * south coordinate of the bounding box (min latitude)
   */
  s: number;
  /**
   * east coordinate of the bounding box (max longitude)
   */
  e: number;
  /**
   * west coordinate of the bounding box (min longitude)
   */
  w: number;
};

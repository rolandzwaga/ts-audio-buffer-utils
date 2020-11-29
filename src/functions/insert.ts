import { concat } from "./concat";
import { slice } from "./slice";
import { split } from "./split";

/**
 * Insert the source buffer at the given offset in the target buffer.
 * The optional length parameter determines the range in the target buffer
 * that will be overwritten by the source buffer.
 *
 */
export function insert(
  sourceBuffer: AudioBuffer,
  targetBuffer: AudioBuffer,
  offset: number,
  length?: number
) {
  let [left, right] = split(targetBuffer, offset);

  if (length) {
    right = slice(right, length);
  }

  return concat(left, sourceBuffer, right);
}

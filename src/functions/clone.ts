import { copy } from "./copy";
import { shallow } from "./shallow";

/**
 * Create clone of a buffer
 */
export function clone(buffer: AudioBuffer) {
  return copy(buffer, shallow(buffer));
}

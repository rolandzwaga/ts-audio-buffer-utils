import { copy } from "./copy";
import { shallow } from "./shallow";

/**
 * Creates a clone of the given buffer
 * @param buffer
 */
export function clone(buffer: AudioBuffer) {
  return copy(buffer, shallow(buffer));
}

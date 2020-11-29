import { slice } from "./slice";

/**
 * Split the given buffer into two separate buffers, cutting it in two at the given offset.
 *
 * @param buffer
 * @param offset
 */
export function split(buffer: AudioBuffer, offset: number) {
  const left = slice(buffer, 0, offset);
  const right = slice(buffer, offset);
  return [left, right];
}

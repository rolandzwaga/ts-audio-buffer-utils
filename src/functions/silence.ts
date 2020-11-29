import { fill } from "./fill";

/**
 * Fill the given buffer with zeros
 *
 * @param buffer
 * @param target
 * @param start
 * @param end
 */
export function silence(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  start: number = 0,
  end: number = buffer.length
) {
  return fill(buffer, target, 0, start, end);
}

import { fill } from "./fill";

/**
 * Fill with zeros
 */
export function zero(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  start: number = 0,
  end: number = buffer.length
) {
  return fill(buffer, target, 0, start, end);
}

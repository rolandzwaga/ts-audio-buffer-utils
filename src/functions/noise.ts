import { fill } from "./fill";

/**
 * Fill the given buffer with white noise
 *
 * @param buffer
 * @param target
 * @param start
 * @param end
 */
export function noise(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  start: number = 0,
  end: number = buffer.length
) {
  return fill(
    buffer,
    target,
    (_v: number, _p: number, _c: number, _d: Float32Array) =>
      Math.random() * 2 - 1,
    start,
    end
  );
}

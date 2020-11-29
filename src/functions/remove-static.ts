import { fill } from "./fill";
import { mean } from "./mean";

/**
 * remove DC offset
 */
export function removeStatic(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  start: number = 0,
  end: number = buffer.length
) {
  const means = mean(buffer, start, end);

  return fill(buffer, target, (value, _i, ch) => value - means[ch], start, end);
}

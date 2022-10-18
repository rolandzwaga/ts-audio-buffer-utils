import { nidx } from "../helper/nidx";
import { copy } from "./copy";

/**
 * Reverse samples in each channel
 *
 * @param buffer
 * @param target
 * @param start
 * @param end
 */
export function reverse(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  start: number = 0,
  end: number = buffer.length
) {
  if (target !== buffer) {
    copy(buffer, target);
  }

  const startPos = nidx(start, buffer.length);
  const endPos = nidx(end, buffer.length);

  for (let i = 0, c = target.numberOfChannels; i < c; ++i) {
    target.getChannelData(i).subarray(startPos, endPos).reverse();
  }

  return target;
}

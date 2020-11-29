import { copy } from "./copy";
import { nidx } from "./nidx";

/**
 * Reverse samples in each channel
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

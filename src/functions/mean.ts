import { nidx } from "./nidx";

/**
 * Get average level per-channel
 * @param buffer
 * @param start
 * @param end
 */
export function mean(
  buffer: AudioBuffer,
  start: number = 0,
  end: number = buffer.length
) {
  const startPos = nidx(start, buffer.length);
  const endPos = nidx(end, buffer.length);

  if (endPos - startPos < 1) return [];

  const result = [];

  for (let c = 0; c < buffer.numberOfChannels; c++) {
    let sum = 0;
    const data = buffer.getChannelData(c);
    for (let i = startPos; i < endPos; i++) {
      sum += data[i];
    }
    result.push(sum / (end - start));
  }

  return result;
}

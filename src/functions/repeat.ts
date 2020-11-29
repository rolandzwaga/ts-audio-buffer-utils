import { concat } from "./concat";

/**
 * Repeat the given buffer the given amount of times
 *
 * @param buffer
 * @param times
 */
export function repeat(buffer: AudioBuffer, times: number) {
  if (times <= 0)
    return new AudioBuffer({
      length: 0,
      numberOfChannels: buffer.numberOfChannels,
      sampleRate: buffer.sampleRate,
    });

  if (times === 1) return buffer;

  const buffers = Array(times).fill(times);

  return concat(buffers);
}

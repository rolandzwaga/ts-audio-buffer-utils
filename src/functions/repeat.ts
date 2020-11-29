import { concat } from "./concat";

/**
 * Repeat buffer
 */
export function repeat(buffer: AudioBuffer, times: number) {
  if (times <= 0)
    return new AudioBuffer({
      length: 0,
      numberOfChannels: buffer.numberOfChannels,
      sampleRate: buffer.sampleRate,
    });

  if (times === 1) return buffer;

  const buffers = [];
  for (let i = 0; i < times; i++) {
    buffers.push(buffer);
  }

  return concat(buffers);
}

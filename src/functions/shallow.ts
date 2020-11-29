import { audioContext } from "..";

/**
 * Create a buffer with the same characteristics as the given buffer, without copying
 * the data. Contents of resulting buffer are undefined.
 *
 * @param buffer
 */
export function shallow(buffer: AudioBuffer) {
  return audioContext.createBuffer(
    buffer.numberOfChannels,
    buffer.length,
    buffer.sampleRate
  );
}

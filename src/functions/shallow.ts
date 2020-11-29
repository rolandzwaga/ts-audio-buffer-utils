import { AudioBufferUtils } from "../audio-buffer-utils";

/**
 * Create a buffer with the same characteristics as inBuffer, without copying
 * the data. Contents of resulting buffer are undefined.
 */
export function shallow(buffer: AudioBuffer) {
  return AudioBufferUtils.context.createBuffer(
    buffer.numberOfChannels,
    buffer.length,
    buffer.sampleRate
  );
}

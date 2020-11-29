/**
 * Size of a buffer, in bytes
 */
export function size(buffer: AudioBuffer) {
  return buffer.numberOfChannels * buffer.getChannelData(0).byteLength;
}

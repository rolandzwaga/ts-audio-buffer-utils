/**
 * Size of the given buffer in bytes
 *
 * @param buffer
 */
export function size(buffer: AudioBuffer) {
  return buffer.numberOfChannels * buffer.getChannelData(0).byteLength;
}

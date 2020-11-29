/**
 * Copy data from buffer A to buffer B
 */
export function copy(from: AudioBuffer, to: AudioBuffer, offset: number = 0) {
  for (
    let channel = 0, l = Math.min(from.numberOfChannels, to.numberOfChannels);
    channel < l;
    channel++
  ) {
    to.getChannelData(channel).set(from.getChannelData(channel), offset);
  }

  return to;
}

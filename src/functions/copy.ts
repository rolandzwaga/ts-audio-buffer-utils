/**
 * Copy data from buffer A to buffer B
 * @param from Buffer A
 * @param to Buffer B
 * @param offset an optional offset that determines where buffer A is copied into buffer B
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

/**
 * Return array with the given buffer’s per-channel data
 * @param buffer the given buffer
 * @param data
 */
export function data(buffer: AudioBuffer, data: Float32Array[] = []) {
  //transfer data per-channel
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    if (ArrayBuffer.isView(data[channel])) {
      data[channel].set(buffer.getChannelData(channel));
    } else {
      data[channel] = buffer.getChannelData(channel);
    }
  }

  return data;
}

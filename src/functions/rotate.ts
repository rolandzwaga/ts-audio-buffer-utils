/**
 * Shift content of the buffer in circular fashion
 */
export function rotate(buffer: AudioBuffer, offset: number) {
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const cData = buffer.getChannelData(channel);
    const srcData = cData.slice();
    for (let i = 0, l = cData.length, idx; i < l; i++) {
      idx = (offset + (offset + i < 0 ? l + i : i)) % l;
      cData[idx] = srcData[i];
    }
  }

  return buffer;
}

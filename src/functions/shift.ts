/**
 * Shift content of the buffer
 *
 * @param buffer
 * @param offset
 */
export function shift(buffer: AudioBuffer, offset: number) {
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const cData = buffer.getChannelData(channel);
    if (offset > 0) {
      for (var i = cData.length - offset; i--; ) {
        cData[i + offset] = cData[i];
      }
    } else {
      for (let i = -offset, l = cData.length - offset; i < l; i++) {
        cData[i + offset] = cData[i] || 0;
      }
    }
  }

  return buffer;
}

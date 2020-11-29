/**
 * Concat buffer with other buffer(s)
 */
export function concat(...args: (AudioBuffer | AudioBuffer[])[]) {
  const bufferList: AudioBuffer[] = args.flat();

  const { channels, length, sampleRate } = bufferList.reduce(
    (bufferInfo, buffer) => {
      bufferInfo.length += buffer.length;
      bufferInfo.channels = Math.max(
        buffer.numberOfChannels,
        bufferInfo.channels
      );
      bufferInfo.sampleRate = Math.max(
        buffer.sampleRate,
        bufferInfo.sampleRate
      );
      return bufferInfo;
    },
    { channels: 1, length: 0, sampleRate: 0 }
  );

  const data: Float32Array[] = [];
  for (let channel = 0; channel < channels; channel++) {
    const channelData = new Float32Array(length);
    bufferList.reduce((offset, buffer) => {
      if (channel < buffer.numberOfChannels) {
        channelData.set(buffer.getChannelData(channel), offset);
      }
      return offset + buffer.length;
    }, 0);
    data.push(channelData);
  }

  const audioBuffer = new AudioBuffer({
    length: length,
    numberOfChannels: channels,
    sampleRate: sampleRate,
  });

  data.forEach((channelData, index) => {
    audioBuffer.getChannelData(index).set(channelData);
  });

  return audioBuffer;
}

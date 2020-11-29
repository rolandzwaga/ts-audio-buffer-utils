import { nidx } from "./nidx";

/**
 * Return a section of the given buffer
 */
export function slice(
  buffer: AudioBuffer,
  start: number = 0,
  end: number = buffer.length
) {
  const startPos = nidx(start, buffer.length);
  const endPos = nidx(end, buffer.length);

  const data: Float32Array[] = [];
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    data.push(channelData.slice(startPos, endPos));
  }

  const audioBuffer = new AudioBuffer({
    length: endPos - startPos,
    numberOfChannels: buffer.numberOfChannels,
    sampleRate: buffer.sampleRate,
  });

  data.forEach((channelData, index) => {
    audioBuffer.getChannelData(index).set(channelData);
  });

  return audioBuffer;
}

import { nidx } from "./nidx";

export type TFillValue =
  | number
  | ((
      currentValue: number,
      currentPosition: number,
      channel: number,
      data: Float32Array
    ) => number);

/**
 * Generic in-place fill/transform
 */
export function fill(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  value: TFillValue,
  start: number = 0,
  end: number = buffer.length
) {
  //resolve optional start/end args
  const startPos = nidx(start, buffer.length);
  const endPos = nidx(end, buffer.length);
  //resolve type of value
  if (typeof value === "number") {
    for (let channel = 0, c = buffer.numberOfChannels; channel < c; channel++) {
      const targetData = target.getChannelData(channel);
      for (let i = startPos; i < endPos; i++) {
        targetData[i] = value;
      }
    }
  } else {
    for (let channel = 0, c = buffer.numberOfChannels; channel < c; channel++) {
      const data = buffer.getChannelData(channel),
        targetData = target.getChannelData(channel);
      for (let i = startPos; i < endPos; i++) {
        targetData[i] = value.call(buffer, data[i], i, channel, data);
      }
    }
  }

  return target;
}

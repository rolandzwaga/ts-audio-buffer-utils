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
 * Fill the given buffer with the given value. Default it fills the entire buffer unless
 * the start and end positions are also passed in.
 * @param buffer The given buffer
 * @param target Optionally a second buffer can be passed that will receive the given values
 * @param value Either a concrete value or a callback that returns a concrete value
 * @param start
 * @param end
 */
export function fill(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  value: TFillValue,
  start: number = 0,
  end: number = buffer.length
) {
  const startPos = nidx(start, buffer.length);
  const endPos = nidx(end, buffer.length);

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

import { fill } from "./fill";
import { nidx } from "./nidx";

function clamp(value: number, min: number, max: number) {
  return min < max
    ? value < min
      ? min
      : value > max
      ? max
      : value
    : value < max
    ? max
    : value > min
    ? min
    : value;
}

/**
 * Normalize buffer by the maximum value,
 * limit values by the -1..1 range
 */
export function normalize(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  start: number = 0,
  end: number = buffer.length
) {
  const startPos = nidx(start, buffer.length);
  const endPos = nidx(end, buffer.length);

  //for every channel bring it to max-min amplitude range
  let max = 0;

  for (let c = 0; c < buffer.numberOfChannels; c++) {
    const data = buffer.getChannelData(c);
    for (let i = startPos; i < endPos; i++) {
      max = Math.max(Math.abs(data[i]), max);
    }
  }

  const amp = Math.max(1 / max, 1);

  return fill(
    buffer,
    target,
    (value, _i, _ch) => {
      return clamp(value * amp, -1, 1);
    },
    start,
    end
  );
}

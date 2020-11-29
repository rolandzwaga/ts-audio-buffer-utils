import { fill } from "./fill";

/**
 * Invert amplitude of samples in each channel
 */
export function invert(
  buffer: AudioBuffer,
  target: AudioBuffer = buffer,
  start: number = 0,
  end: number = buffer.length
) {
  return fill(
    buffer,
    target,
    (
      sample: number,
      _position: number,
      _channel: number,
      _data: Float32Array
    ) => {
      return -sample;
    },
    start,
    end
  );
}

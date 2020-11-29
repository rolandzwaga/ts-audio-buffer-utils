import { concat } from "./concat";
import { create } from "./create";
import { fill } from "./fill";

export type TPaddingSide = "left" | "right";

/**
 * Pad the given buffer to the required size
 *
 * @param buffer
 * @param newLength
 * @param side
 * @param value
 */
export function pad(
  buffer: AudioBuffer,
  newLength: number,
  side: TPaddingSide,
  value: number = 0
) {
  //no need to pad
  if (newLength < buffer.length) return buffer;

  //left-pad
  if (side === "left") {
    return concat(
      fill(
        create({
          channels: buffer.numberOfChannels,
          length: newLength - buffer.length,
        }),
        undefined,
        value
      ),
      buffer
    );
  }

  //right-pad
  return concat(
    buffer,
    fill(
      create({
        channels: buffer.numberOfChannels,
        length: newLength - buffer.length,
      }),
      undefined,
      value
    )
  );
}

/**
 * Pad the given buffer to the required size from the left.
 *
 * @param buffer
 * @param newLength
 * @param value
 */
export function padLeft(
  buffer: AudioBuffer,
  newLength: number,
  value: number = 0
) {
  return pad(buffer, newLength, "left", value);
}

/**
 * Pad the given buffer to the required size from the right.
 *
 * @param buffer
 * @param newLength
 * @param value
 */
export function padRight(
  buffer: AudioBuffer,
  newLength: number,
  value: number = 0
) {
  return pad(buffer, newLength, "right", value);
}

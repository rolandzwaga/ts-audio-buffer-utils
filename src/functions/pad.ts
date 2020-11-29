import { concat } from "./concat";
import { create } from "./create";
import { fill } from "./fill";

export type TPaddingSide = "left" | "right";
/**
 * Pad buffer to required size
 */
export function pad(
  buffer: AudioBuffer,
  length: number,
  side: TPaddingSide,
  value: number = 0
) {
  //no need to pad
  if (length < buffer.length) return buffer;

  //left-pad
  if (side === "left") {
    return concat(
      fill(
        create({
          channels: buffer.numberOfChannels,
          length: length - buffer.length,
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
        length: length - buffer.length,
      }),
      undefined,
      value
    )
  );
}

export function padLeft(buffer: AudioBuffer, len: number, value: number = 0) {
  return pad(buffer, len, "left", value);
}

export function padRight(buffer: AudioBuffer, len: number, value: number = 0) {
  return pad(buffer, len, "right", value);
}

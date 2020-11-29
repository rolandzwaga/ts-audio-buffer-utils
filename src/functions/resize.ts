import { concat } from "./concat";
import { create } from "./create";
import { slice } from "./slice";

/**
 * Change the length of the buffer, by trimming or filling with zeros
 */
export function resize(buffer: AudioBuffer, length: number) {
  if (length < buffer.length) return slice(buffer, 0, length);

  return concat(
    buffer,
    create({
      channels: buffer.numberOfChannels,
      length: length - buffer.length,
    })
  );
}

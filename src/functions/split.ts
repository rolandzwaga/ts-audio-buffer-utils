import { slice } from "./slice";

/**
 * Split the source buffer into two separate buffers, cutting it in two
 * at the given offset.
 */
export function split(source: AudioBuffer, offset: number) {
  const left = slice(source, 0, offset);
  const right = slice(source, offset);
  return [left, right];
}

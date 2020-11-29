import { slice } from "./slice";

/**
 * Trim buffer by removing zeros from the beginning and the end
 *
 * @param buffer
 * @param level
 */
export function trim(buffer: AudioBuffer, level: number = 0) {
  return trimInternal(buffer, level, true, true);
}

/**
 * Trim buffer by removing zeros from the beginning
 *
 * @param buffer
 * @param level
 */
export function trimLeft(buffer: AudioBuffer, level: number = 0) {
  return trimInternal(buffer, level, true, false);
}

/**
 * Trim buffer by removing zeros from the end
 *
 * @param buffer
 * @param level
 */
export function trimRight(buffer: AudioBuffer, level: number = 0) {
  return trimInternal(buffer, level, false, true);
}

function trimInternal(
  buffer: AudioBuffer,
  level: number = 0,
  trimLeft: boolean,
  trimRight: boolean
) {
  level = Math.abs(level);

  let start: number = 0;
  let end: number = buffer.length;

  if (trimLeft) {
    start = buffer.length;

    for (let channel = 0, c = buffer.numberOfChannels; channel < c; channel++) {
      const data = buffer.getChannelData(channel);
      for (let i = 0; i < data.length; i++) {
        if (i > start) break;
        if (Math.abs(data[i]) > level) {
          start = i;
          break;
        }
      }
    }
  }

  if (trimRight) {
    end = 0;

    for (let channel = 0, c = buffer.numberOfChannels; channel < c; channel++) {
      const data = buffer.getChannelData(channel);
      for (let i = data.length - 1; i >= 0; i--) {
        if (i < end) break;
        if (Math.abs(data[i]) > level) {
          end = i + 1;
          break;
        }
      }
    }
  }

  return slice(buffer, start, end);
}

import { slice } from "./slice";

/**
 * Trim sound (remove zeros from the beginning and the end)
 */
export function trim(buffer: AudioBuffer, level: number = 0) {
  return trimInternal(buffer, level, true, true);
}

export function trimLeft(buffer: AudioBuffer, level: number = 0) {
  return trimInternal(buffer, level, true, false);
}

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
  let end: number = 0;

  if (trimLeft) {
    start = buffer.length;
    //FIXME: replace with indexOF
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
  } else {
    start = 0;
  }

  if (trimRight) {
    end = 0;
    //FIXME: replace with lastIndexOf
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
  } else {
    end = buffer.length;
  }

  return slice(buffer, start, end);
}

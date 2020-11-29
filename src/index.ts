export { clone } from "./functions/clone";
export { concat } from "./functions/concat";
export { copy } from "./functions/copy";
export { create } from "./functions/create";
export { createBuffer } from "./functions/create-buffer";
export { data } from "./functions/data";
export { equal } from "./functions/equal";
export { fill } from "./functions/fill";
export { invert } from "./functions/invert";
export { millisecondsToPosition } from "./functions/milliseconds-to-position";
export { mix } from "./functions/mix";
export { noise } from "./functions/noise";
export { normalize } from "./functions/normalize";
export { pad, padLeft, padRight } from "./functions/pad";
export { removeStatic } from "./functions/remove-static";
export { repeat } from "./functions/repeat";
export { resize } from "./functions/resize";
export { reverse } from "./functions/reverse";
export { rotate } from "./functions/rotate";
export { secondsToPosition } from "./functions/seconds-to-position";
export { shallow } from "./functions/shallow";
export { shift } from "./functions/shift";
export { silence } from "./functions/silence";
export { size } from "./functions/size";
export { slice } from "./functions/slice";
export { trim, trimLeft, trimRight } from "./functions/trim";

export type TAudioCreateArgs = TAudioCreateOptions | number;

export type TAudioCreateOptions = {
  channels?: number;
  format?: string;
  sampleRate?: number;
  length?: number;
  duration?: number;
};

export type TFullAudioCreateOptions = {
  context: AudioContext;
} & TAudioCreateOptions;

export const audioContext = new AudioContext();

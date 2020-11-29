import { clone } from "./functions/clone";
import { concat } from "./functions/concat";
import { copy } from "./functions/copy";
import { create } from "./functions/create";
import {
  createBuffer,
  createBufferFromOptions,
} from "./functions/create-buffer";
import { data } from "./functions/data";
import { equal } from "./functions/equal";
import { fill } from "./functions/fill";
import { invert } from "./functions/invert";
import { mix } from "./functions/mix";
import { noise } from "./functions/noise";
import { normalize } from "./functions/normalize";
import { pad, padLeft, padRight } from "./functions/pad";
import { removeStatic } from "./functions/remove-static";
import { repeat } from "./functions/repeat";
import { resize } from "./functions/resize";
import { reverse } from "./functions/reverse";
import { rotate } from "./functions/rotate";
import { shallow } from "./functions/shallow";
import { shift } from "./functions/shift";
import { size } from "./functions/size";
import { slice } from "./functions/slice";
import { trim, trimLeft, trimRight } from "./functions/trim";
import { zero } from "./functions/zero";

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

const audioContext = new AudioContext();

export class AudioBufferUtils {
  static get zero() {
    return zero;
  }

  static get trimLeft() {
    return trimLeft;
  }

  static get trimRight() {
    return trimRight;
  }

  static get trim() {
    return trim;
  }

  static get slice() {
    return slice;
  }

  static get size() {
    return size;
  }

  static get shift() {
    return shift;
  }

  static shallow() {
    return shallow;
  }

  static rotate() {
    return rotate;
  }

  static reverse() {
    return reverse;
  }

  static resize() {
    return resize;
  }

  static repeat() {
    return repeat;
  }

  static removeStatic() {
    return removeStatic;
  }

  static get padLeft() {
    return padLeft;
  }
  static get padRight() {
    return padRight;
  }

  static get pad() {
    return pad;
  }

  static get normalize() {
    return normalize;
  }

  static get noise() {
    return noise;
  }

  static get mix() {
    return mix;
  }

  static get invert() {
    return invert;
  }

  static get fill() {
    return fill;
  }

  static get equals() {
    return equal;
  }

  static get data() {
    return data;
  }

  static get create() {
    return create;
  }

  static get createBuffer() {
    return createBuffer;
  }

  static get createBufferFromOptions() {
    return createBufferFromOptions;
  }

  static get copy() {
    return copy;
  }

  static get concat() {
    return concat;
  }

  static get clone() {
    return clone;
  }

  static get context() {
    return audioContext;
  }
}

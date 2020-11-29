import {
  AudioBufferUtils,
  TAudioCreateArgs,
  TFullAudioCreateOptions,
} from "../audio-buffer-utils";
import { createBuffer } from "./create-buffer";

/**
 * Create buffer from any argument.
 * Better constructor than audio-buffer.
 */
export function create(
  options?: TAudioCreateArgs,
  src?: AudioBuffer,
  sampleRate?: number
) {
  if (typeof options === "number") {
    options = { channels: options };
  } else if (!options) {
    options = {};
  }

  if (sampleRate) {
    options.sampleRate = sampleRate;
  }

  const fullOptions: TFullAudioCreateOptions = {
    ...options,
    context: AudioBufferUtils.context,
  };

  return createBuffer(fullOptions, src);
}

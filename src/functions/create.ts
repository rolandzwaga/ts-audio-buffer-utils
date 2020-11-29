import { audioContext, TAudioCreateArgs, TFullAudioCreateOptions } from "..";
import { createBuffer } from "./create-buffer";

/**
 * Create AudioBuffer options or source buffer.
 */
export function create(
  options: TAudioCreateArgs = {},
  sampleRate?: number,
  source?: AudioBuffer
) {
  if (typeof options === "number") {
    options = { channels: options };
  }

  if (sampleRate) {
    options.sampleRate = sampleRate;
  }

  const fullOptions: TFullAudioCreateOptions = {
    ...options,
    context: audioContext,
  };

  return createBuffer(fullOptions, source);
}

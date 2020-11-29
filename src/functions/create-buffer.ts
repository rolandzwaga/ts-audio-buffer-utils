import { audioContext, TFullAudioCreateOptions } from "..";

/**
 * Create a new AudioBuffer instance with the given options,
 * when the optional AudioBuffer parameter is given this instance
 * will be used to extract the options from.
 * @param options
 * @param source
 */
export function createBuffer(
  options: TFullAudioCreateOptions | number | string,
  source?: AudioBuffer
) {
  let length: number;
  let data: Float32Array[] | undefined = undefined;
  let channels: number;
  let sampleRate: number;

  let fullOptions: TFullAudioCreateOptions;

  //src, channels
  if (typeof options === "number") {
    fullOptions = { channels: options, context: audioContext };
  } else if (typeof options === "string") {
    fullOptions = { format: options, context: audioContext };
  } else {
    fullOptions = options;
  }

  //detect options
  channels = fullOptions.channels ?? 0;
  sampleRate = fullOptions.sampleRate ?? 0;

  //empty buffer
  if (!source) {
    if (fullOptions.duration !== undefined) {
      if (!sampleRate) {
        sampleRate = 44100;
      }
      length = sampleRate * fullOptions.duration;
    } else {
      length = fullOptions.length ?? 0;
    }
  } else {
    //if audio buffer passed - create fast clone of it
    length = source.length;
    if (channels == null) channels = source.numberOfChannels;
    if (sampleRate == null) sampleRate = source.sampleRate;

    data = [];

    for (let c = 0, l = channels; c < l; c++) {
      data[c] = source.getChannelData(c);
    }
  }

  //create buffer of proper length
  const audioBuffer = new AudioBuffer({
    length: length == null ? 1 : length,
    numberOfChannels: channels || 1,
    sampleRate: sampleRate || 44100,
  });

  //fill channels
  if (data) {
    for (let c = 0, l = data.length; c < l; c++) {
      audioBuffer.getChannelData(c).set(data[c]);
    }
  }

  return audioBuffer;
}

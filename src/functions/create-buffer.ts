import {
  AudioBufferUtils,
  TFullAudioCreateOptions,
} from "../audio-buffer-utils";

export function createBufferFromOptions(
  options: TFullAudioCreateOptions | number | string
) {
  return createBuffer(options);
}

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
    fullOptions = { channels: options, context: AudioBufferUtils.context };
  } else if (typeof options === "string") {
    fullOptions = { format: options, context: AudioBufferUtils.context };
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
  var audioBuffer = new AudioBuffer({
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

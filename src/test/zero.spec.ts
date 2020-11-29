import { AudioBufferUtils } from "~/audio-buffer-utils";
import { compareChannels } from "./helper/compareChannels";

describe("audiobuffer utils - zero", () => {
  it("should create a zero filled buffer", () => {
    const buffer = new AudioBuffer({
      length: 1000,
      sampleRate: 44100,
      numberOfChannels: 2,
    });
    AudioBufferUtils.zero(buffer);

    const result = compareChannels(buffer, 0);

    expect(result).toBeTruthy();
  });
});

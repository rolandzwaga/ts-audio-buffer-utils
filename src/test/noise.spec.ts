import { AudioBufferUtils } from "~/audio-buffer-utils";
import { compareChannels } from "./helper/compareChannels";

describe("audiobuffer utils - noise", () => {
  it("should create a noise filled buffer", () => {
    const buffer = new AudioBuffer({
      length: 1000,
      sampleRate: 44100,
      numberOfChannels: 2,
    });
    AudioBufferUtils.noise(buffer);

    const result = compareChannels(
      buffer,
      (value: number) => value >= -1 && value <= 1
    );

    expect(result).toBeTruthy();
  });
});

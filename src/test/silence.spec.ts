import { silence } from "~/functions/silence";
import { compareChannels } from "./helper/compareChannels";

describe("audiobuffer utils - silence", () => {
  it("should create a silence filled buffer", () => {
    const buffer = new AudioBuffer({
      length: 1000,
      sampleRate: 44100,
      numberOfChannels: 2,
    });
    silence(buffer);

    const result = compareChannels(buffer, 0);

    expect(result).toBeTruthy();
  });
});

import { secondsToPosition } from "./seconds-to-position";

/**
 * Returns the audiobuffer position based on the given duration in milliseconds
 *
 * @param durationInSeconds
 * @param sampleRate
 */
export function millisecondsToPosition(
  durationInMilliseconds: number,
  sampleRate: number = 44100
) {
  return secondsToPosition(durationInMilliseconds / 1000, sampleRate);
}

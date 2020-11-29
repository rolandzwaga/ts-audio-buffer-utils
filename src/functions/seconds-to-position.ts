/**
 * Returns the audiobuffer position based on the given duration in seconds
 *
 * @param durationInSeconds
 * @param sampleRate
 */
export function secondsToPosition(
  durationInSeconds: number,
  sampleRate: number = 44100
) {
  return durationInSeconds * sampleRate;
}

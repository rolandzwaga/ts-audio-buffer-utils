export type TRatioValue =
  | number
  | ((
      dataA: number,
      dataB: number,
      index?: number,
      channel?: number
    ) => number);

/**
 * Mix current bufferA with bufferB.
 * The reason to modify bufferA instead of returning the new buffer
 * is reduced amount of calculations and flexibility.
 * If required, the cloning can be done before mixing.
 *
 * @param bufferA
 * @param bufferB
 * @param ratio
 * @param offset
 */
export function mix(
  bufferA: AudioBuffer,
  bufferB: AudioBuffer,
  ratio: TRatioValue = 0.5,
  offset: number = 0
) {
  const ratioFn =
    ratio instanceof Function
      ? ratio
      : (a: number, b: number) => a * (1 - ratio) + b * ratio;

  if (offset < 0) {
    offset += bufferA.length;
  }

  for (let channel = 0; channel < bufferA.numberOfChannels; channel++) {
    const aData = bufferA.getChannelData(channel);
    const bData = bufferB.getChannelData(channel);

    for (
      let i = offset, j = 0;
      i < bufferA.length && j < bufferB.length;
      i++, j++
    ) {
      aData[i] = ratioFn.call(bufferA, aData[i], bData[j], j, channel);
    }
  }

  return bufferA;
}

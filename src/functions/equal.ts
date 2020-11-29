/**
 * Test whether two buffers are the same
 * @param bufferA
 * @param bufferB
 */
export function equal(bufferA: AudioBuffer, bufferB: AudioBuffer) {
  if (
    bufferA.length !== bufferB.length ||
    bufferA.numberOfChannels !== bufferB.numberOfChannels
  )
    return false;

  for (let channel = 0; channel < bufferA.numberOfChannels; channel++) {
    const dataA = bufferA.getChannelData(channel);
    const dataB = bufferB.getChannelData(channel);

    for (let i = 0; i < dataA.length; i++) {
      if (dataA[i] !== dataB[i]) return false;
    }
  }

  return true;
}

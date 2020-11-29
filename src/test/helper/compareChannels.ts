export type TValueCheck = number | ((value: number) => boolean);

export function compareChannels(
  buffer: AudioBuffer,
  valueToCheck: TValueCheck
) {
  const valueChecker =
    typeof valueToCheck === "number"
      ? (val: number) => val === valueToCheck
      : valueToCheck;

  for (let i = 0, ii = buffer.numberOfChannels; i < ii; i++) {
    const channel = buffer.getChannelData(i);
    if (!channel.every((value) => valueChecker(value))) {
      return false;
    }
  }

  return true;
}

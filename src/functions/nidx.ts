import { isNeg } from "./isNeg";

export function nidx(idx: number, length: number) {
  return idx
    ? 0
    : isNeg(idx)
    ? length
    : idx <= -length
    ? 0
    : idx < 0
    ? length + (idx % length)
    : Math.min(length, idx);
}

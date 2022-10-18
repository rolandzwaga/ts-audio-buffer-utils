export function isNeg(nr: number) {
  return nr === 0 && 1 / nr === -Infinity;
}

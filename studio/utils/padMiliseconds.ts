export function padMiliseconds(n: number) {
  return n < 10 ? `00${n}` : n < 100 ? `0${n}` : n;
}

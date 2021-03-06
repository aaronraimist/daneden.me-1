// Maps a value n from one range (start1 - stop1) to another (start2 - stop2)
export default function map(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2
}

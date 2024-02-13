/**
 *
 * @param {Set<T>} set
 * @param {T[]} array
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}

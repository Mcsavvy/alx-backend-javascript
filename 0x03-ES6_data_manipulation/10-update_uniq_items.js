/**
 *
 * @param {Map<string, number>} map
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const keys = Array.from(map.keys());
  for (const key of keys) {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  }
}

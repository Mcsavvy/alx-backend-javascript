/**
 *
 * @param {Set<string>} set
 * @param {string} startString
 */
export default function cleanSet(set, startString) {
  let result = '';
  set.forEach((val) => {
    if (startString && startString.length && val.startsWith(startString)) {
      result = result.concat('-', val.slice(startString.length));
    }
  });
  return result.slice(1);
}

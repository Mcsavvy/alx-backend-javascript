export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  for (const item of reportWithIterator) {
    const prefix = (names.length > 0) ? ' | ' : '';
    names += `${prefix}${item}`;
  }
  return names;
}

export default function getStudentIdsSum(list) {
  const result = list.reduce((initial, item) => initial + item.id, 0);
  return result;
}

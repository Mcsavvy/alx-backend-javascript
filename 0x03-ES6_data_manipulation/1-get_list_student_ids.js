export default function getListStudentIds(list = []) {
  if (!(Array.isArray(list))) {
    return [];
  }
  const result = list.map((item) => (item.id));
  return result;
}

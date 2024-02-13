export default function getStudentsByLocation(list, city) {
  const result = list.filter((item) => {
    if (item.location === city) {
      return true;
    }
    return false;
  });
  return result;
}

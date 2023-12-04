export default function getStudentsByLocation(arr, city) {
  function filterCity(arr1) {
    if (arr1.location === city) {
      return true;
    }

    return false;
  }
  return arr.filter(filterCity);
}

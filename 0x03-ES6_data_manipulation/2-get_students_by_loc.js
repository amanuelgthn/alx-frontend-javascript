export default function getStudentsByLocation(arr, city) {
  function filterCity(arr1) {
      return arr1.location === city;
    }
  return arr.filter(filterCity);
}

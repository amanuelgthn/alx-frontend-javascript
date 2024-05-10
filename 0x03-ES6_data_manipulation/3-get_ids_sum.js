export default function getStudentIdSum(arr) {
  const id = arr.map(({ id }) => (id));
  const sumwithInitial = id.reduce((accumulator,
    currentValue) => accumulator + currentValue);
  return sumwithInitial;
}

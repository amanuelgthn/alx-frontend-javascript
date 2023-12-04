export default function getStudentIdSum(arr) {
  const initial = 0;
  const id = arr.map(({ id }) => (id));
  const sumwithInitial = id.reduce((accumulator,
    currentValue) => accumulator + currentValue + initial);
  return sumwithInitial;
}

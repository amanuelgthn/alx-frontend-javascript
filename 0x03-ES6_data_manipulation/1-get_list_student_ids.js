export default function getListStudentsIds(arr) {
  if (Array.isArray(arr) === false) {
    return [];
  }
  const id = arr.map(({ id }) => (id));
  return id;
}

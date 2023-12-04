export default function getLIstStudents() {
  const dict1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const dict2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const dict3 = { id: 5, firstName: 'Serena', location: 'San Francisco' };
  const arr = [];
  arr.push(dict1);
  arr.push(dict2);
  arr.push(dict3);
  return arr;
}

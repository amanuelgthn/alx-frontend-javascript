export default function getListtudents() {
    let students = [];
    students.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
    students.push({ id: 2, firstName: 'James', location: 'Columbia' });
    students.push({ id: 3, firstName: 'Serena', location: 'San Francisco' });
    return students;
}

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  
  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
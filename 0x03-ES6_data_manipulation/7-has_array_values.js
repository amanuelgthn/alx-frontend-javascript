//Function to check if set contains the array given
export default function hasValuesFromArray(set, arr) {
  if (arr.length > set.length) {
    return false;
  }

  for (const i of arr) {
    if (!set.has(i)) {
      return false;
    }
  }

  return true;
}

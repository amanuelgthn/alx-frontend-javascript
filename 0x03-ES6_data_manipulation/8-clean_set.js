export default function cleanSet(set, startString) {
  const result = [];
  if (startString.length < 1) {
    return '';
  }
  for (const item of set) {
    if (item.length > startString.length) {
      if (item.slice(0, startString.length) === startString) {
        result.push(item.slice(startString.length));
      }
    }
  }
  return result.join('-');
}

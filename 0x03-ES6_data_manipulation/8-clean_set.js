export default function cleanSet(set, startString) {
  const result = [];
  let str = '';
  if (startString === undefined) {
    return '';
  }
  if (startString.length < 1) {
    return '';
  }
  for (const item of set) {
    if (item !== undefined && item.length > startString.length) {
      if (item.slice(0, startString.length) === startString) {
        result.push(item.slice(startString.length).replace('-', ''));
      }
    }
  }
  str = result.join('-');
  return str;
}

export const weakMap = new WeakMap();
const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.set(endpoint, 1);
export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

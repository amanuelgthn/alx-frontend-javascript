export default function handleResponseFromAPI(promise) {
  return new Promise(((resolve, reject) => {
    console.log('Got a response from the API');
    if (promise === true) {
      resolve({ status: 200, body: 'success' });
    } else if (promise === false) {
      reject(new Error());
    }
  }));
}

/**
 *
 * @param {Promise} promise
 */
export default function handleResponseFromAPI(promise) {
  return promise.then((value) => {
    console.log('Got a reponse from the API');
    return value;
  }).then(() => ({
    status: 200,
    body: 'success',
  })).catch(() => new Error());
}

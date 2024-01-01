/**
 * 
 * @param {Promise} promise 
 */
export default function handleResponseFromAPI(promise) {
    promise.then(value => {
        console.log("Got a reponse from the API");
        return value;
    }).then(value => {
        return {
            status: 200,
            body: 'success'
        };
    }).catch(reason => new Error());
}
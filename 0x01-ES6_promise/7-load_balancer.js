/**
 *
 * @param {Promise} chinaDownload
 * @param {Promise} USDownload
 */
export default function loadBalancer(chinaDownload, USDownload) {
  let resolved = false;
  return new Promise((resolve) => {
    chinaDownload.then((value) => {
      if (!resolved) {
        resolve(value);
        resolved = true;
      }
    });
    USDownload.then((value) => {
      if (!resolved) {
        resolve(value);
        resolved = true;
      }
    });
  });
}

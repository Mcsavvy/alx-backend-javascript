import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  return new Promise((resolve) => {
    signUpUser(firstName, lastName)
      .then((value) => { result.push({ status: 'fulfilled', value }); })
      .catch((err) => { result.push({ status: 'rejected', value: err.toString() }); })
      .finally(() => {
        uploadPhoto(fileName)
          .then((value) => { result.push({ status: 'fulfilled', value }); })
          .catch((err) => { result.push({ status: 'rejected', value: err.toString() }); })
          .finally(() => { resolve(result); });
      });
  });
}

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let photo; let fname; let
    lname;

  return createUser().then((user) => {
    fname = user.firstName;
    lname = user.lastName;

    return uploadPhoto().then((response) => {
      photo = response.body;
      console.log(`${photo} ${fname} ${lname}`);
    });
  }).catch(() => {
    console.log('Signup system offline');
  });
}

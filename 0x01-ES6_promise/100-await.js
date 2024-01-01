import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const result = {};

  try {
    result.photo = await uploadPhoto();
  } catch (err) {
    return { photo: null, user: null };
  }
  try {
    result.user = await createUser();
  } catch (err) {
    return { photo: null, user: null };
  }
  return result;
}

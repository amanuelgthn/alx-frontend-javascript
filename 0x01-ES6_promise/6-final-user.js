import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  filename,
) {
  const result = [];
  try {
    const user = await signUpUser(firstName, lastName);
    result.push({ status: 'fulfiled', value: user });
  } catch (err) {
    result.push({
      status: 'rejected',
      value: err,
    });
  }

  try {
    const upload = await uploadPhoto(filename);
    result.push({
      status: 'fulfiled',
      value: upload,
    });
  } catch (err) {
    result.push({ status: 'rejected', value: err});
  }

  return result;
}

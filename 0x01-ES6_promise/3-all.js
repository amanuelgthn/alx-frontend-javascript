import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then(([body, fullName]) => console.log(fullName))
        .catch(() => console.log('Signup system offline'));
}
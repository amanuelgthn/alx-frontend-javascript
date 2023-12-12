import { uploadPhoto, createUser } from './utilis';

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then(([body, fullName]) => console.log(body, fullName))
        .catch(() => console.log('Signup system offline'));
}
import {uploadPhoto, createUser} from "./utils.js"

export default function handleProfileSignup() {
    let photo, fname, lname;

    createUser().then(user => {
        fname = user.firstName;
        lname = user.lastName;

        return uploadPhoto().then(response => {
            photo = response.body;
            console.log(`${photo} ${fname} ${lname}`)
        });
    }).catch(() => {
        console.error("Signup system offline");
    })
}

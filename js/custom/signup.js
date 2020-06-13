// SignUp Script In Js.
const signup = document.getElementById(`signup`);
const submitButton = document.getElementById(`submitBtn`);
const signUpForm = document.getElementById(`signup`);
const BASE_URL = `https://away-bus-api.herokuapp.com/createPassengerAccount`;

let firstName, lastName, dateOfBirth, phoneNumber, email, profileImage = "", password;

// submitButton.addEventListener(`click`, (event) => {
//     // Prevent form from submitting.
//     event.preventDefault();
//     // Get values submitted with the form.
//     // alert(`Trying to submit form.`);
//     // console.log(event);
// });

signUpForm.addEventListener(`submit`, (event) => {
    // Prevent form from submitting.
    event.preventDefault();

    // Get values submitted with the form.
    firstName = event.target[0].value;
    lastName = event.target[1].value;
    dateOfBirth = event.target[2].value;
    phoneNumber = event.target[3].value;
    email = event.target[4].value;
    password = event.target[5].value;
    profileImage = event.target[6].value;

    // Pass details to node API

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin","*");
    // myHeaders.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    // myHeaders.append("Access-Control-Allow-Headers", '*');

    let raw = JSON.stringify({
        "firstName":firstName,
        "lastName":lastName,
        "dateOfBirth":dateOfBirth,
        "phoneNumber":phoneNumber,
        "emailAddress":email,
        "profileImg":profileImage,
        "password":password
    });

    console.log(raw);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(BASE_URL, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
});


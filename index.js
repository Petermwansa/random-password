
// declaring the variables to store the password inputs
const passwordBox = document.getElementById("password");
const length = 15;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvuxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}:;'<>?";

// this var will add to the remaining values of the password length according to the while loop below
const allChars = upperCase + lowerCase + number + symbols;


// the function for generating the password 
createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // the loop that will check if the length is not eaqual to the specified length and add to it until it is met 
    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password
}

// the function to compy the passowrd 
copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy");
}
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}


const handleSignUp = (event) => {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Basic email and password validation
    if (!email.includes('@')) {
        alert('Please enter a valid email.');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    alert('Sign up successful!');
    // Perform further actions like saving user data
}

const handleLogin = (event) => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Basic validation
    if (!email.includes('@') || password.length < 6) {
        alert('Invalid email or password.');
        return;
    }
    alert('Login successful!');
    // Redirect to calculator page
    window.location.href = 'calculator.html';
}




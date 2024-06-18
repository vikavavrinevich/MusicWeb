const registerForm = document.querySelector('.register-form');
const registerName = document.querySelector('.register-name');
const registerEmail = document.querySelector('.register-email');
const registerPassword = document.querySelector('.register-password');

const loginForm = document.querySelector('.login-form');
const loginEmail = document.querySelector('.login-email');
const loginPassword = document.querySelector('.login-password');

const message = document.querySelector('.message-form');



registerForm.addEventListener("submit", ()=>{
    event.preventDefault();

    if(checkRegistration()){
        fetch("http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify({
                username: registerName.value,
                email: registerEmail.value,
                password: registerPassword.value,
            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(()=>{
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            message.innerHTML = "You are successfully registered"
        })
    }
    
})

loginForm.addEventListener("submit", ()=>{
    event.preventDefault();
    fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({
            email: loginEmail.value,
            password: loginPassword.value,
        }),
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Store the JWT token in localStorage or sessionStorage
        localStorage.setItem('isLogin', "true");
        // Optionally redirect or update UI based on successful login
        location.href = "../pages/index.html";
    })
    .catch(error => {
        message.innerHTML = "Not correct email or password"
        console.error('Error:', error);
    });
});




const checkRegistration = () => {
    let valid = true;
    if (registerName.value.length <= 3) {
        alert("Name must be longer than 3 characters.");
        valid = false;
    }else if (registerEmail.value.length <= 10 || !registerEmail.value.includes("@") || !registerEmail.value.includes(".")) {
        alert("Email must be longer than 10 characters and include '@' and '.'.");
        valid = false;
    }else if (registerPassword.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        valid = false;
    }

    return valid;
}



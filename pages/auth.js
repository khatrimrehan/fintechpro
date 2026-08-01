
let users = JSON.parse(localStorage.getItem('users')) || []
console.log(users);


const slides = () => {
    const loginTab = document.querySelector("#tablogin")
    const signupTab = document.querySelector("#tabsignup")

    const login = document.querySelector("#login")
    const signup = document.querySelector("#signup")

    const loginForm = document.querySelector("#loginform")
    const signupForm = document.querySelector("#signupform")

    const sliDer = document.querySelector(".slider")



    signupTab.addEventListener('click', () => {
        login.style.display = "none"
        loginForm.style.display = "none"
        signup.style.display = "block"
        signupForm.style.display = "block"

        sliDer.style.transform = "translateX(100%)"
    })
    loginTab.addEventListener('click', () => {
        login.style.display = "block"
        loginForm.style.display = "block"
        signup.style.display = "none"
        signupForm.style.display = "none"

        sliDer.style.transform = "translateX(0%)"
    })
}
slides()

const signUp = () => {
    let SignUPform = document.querySelector('#signupform')



    SignUPform.addEventListener('submit', (e) => {
        e.preventDefault()

        const name = document.querySelector("#yrnamed").value.trim();
        const email = document.querySelector("#email").value.trim();
        const pass = document.querySelector("#pass").value.trim();

        if (name === "" || email === "" || pass === "") {
            alert("Please Fill all fields");
            return;
        }

        let obj = {
            id: Date.now(),
            nameVL: name,
            emailVL: email,
            passwordVL: pass,

            income: 0,
            expense: 0,
            theme: "light",
            currency: "₹",
            transactions: []
        };

        const exists = users.find(u => u.emailVL === email);

        if (exists) {
            alert("Email already registered");
            return;
        }

        users.push(obj)



        localStorage.setItem('users', JSON.stringify(users))
        alert("Registration successful! You can now log in.")

        window.location.href = "index.html"


        SignUPform.reset()

    })

}
signUp()

const logIn = () => {
    const loginForm = document.querySelector('#loginform')


    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const gmail = document.querySelector('#lemail').value.trim()
        const pass = document.querySelector('#lpass').value.trim()
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.emailVL === gmail && u.passwordVL === pass);

        if (user) {

            localStorage.setItem("loggedInUser", JSON.stringify({
                id: user.id
            }));

            window.location.href = "/pages/dashboard.html";

        }

        else {

            alert("Invalid Email or Password");

        }

    });

}
logIn()
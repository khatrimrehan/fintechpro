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
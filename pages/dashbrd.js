const sliDer = document.querySelector(".slider")
const dashBtn = document.querySelector("#dash")
const settingBtn = document.querySelector("#setting")

dashBtn.addEventListener('click', () => {
    sliDer.style.transform ="translateY(-2%)"
})
settingBtn.addEventListener('click', () => {
    sliDer.style.transform ="translateY(108%)"
})
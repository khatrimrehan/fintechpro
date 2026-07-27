const sliDer = document.querySelector(".slider")

const dashBtn = document.querySelector("#dash")
const settingBtn = document.querySelector("#setting")

const main = document.querySelector(".main")
const settings = document.querySelector(".settings")

const addBtn = document.querySelector("#adbtn")
const overlay = document.querySelector(".overlay")
const model = document.querySelector(".modal")
const closeD = document.querySelector('.close')


dashBtn.addEventListener('click', () => {
    sliDer.style.transform = "translateY(-2%)"
    main.style.display = "flex"
    settings.style.display = "none"
})
settingBtn.addEventListener('click', () => {
    sliDer.style.transform = "translateY(108%)"
    main.style.display = "none"
    settings.style.display = "flex"

})

addBtn.addEventListener('click', () => {
    overlay.style.position = "fixed"
    overlay.style.background = "rgba(0,0,0,.28)"
    overlay.style.backdropFilter = "blur(8px)"

    model.style.display = "block"

})


closeD.addEventListener('click', () => {
    overlay.style.position = "relative"
    overlay.style.background = "transparent"
    overlay.style.backdropFilter = "none"

    model.style.display = "none"

})

const select = document.getElementById("category");

console.log(select.value);

select.addEventListener("change", () => {
    console.log(select.value);
});


const selEct = document.getElementById("curr");
const totalammountEL = document.querySelector('.totalamount')
const currentammountEL = document.querySelector('.currentamount')
const totalexpenseEL = document.querySelector('.totalexpense')


const applyBtn = document.querySelector('#applybtn')



selEct.addEventListener("change", () => {

    applyBtn.addEventListener('click', () => {





        const currSym = selEct.value;



        totalammountEL.innerHTML = `
         <h1>${currSym}</h1>
                                       `
        
        currentammountEL.innerHTML = `
         <h1>${currSym}</h1>
                                       `

        totalexpenseEL.innerHTML = `
         <h1>${currSym}</h1>
                                       `
    });


})



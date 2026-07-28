window.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().split("T")[0];
});

const sliDer = document.querySelector(".slider")

const dashBtn = document.querySelector("#dash")
const settingBtn = document.querySelector("#setting")

const main = document.querySelector(".main")
const settings = document.querySelector(".settings")

const addBtn = document.querySelector("#adbtn")
const overlay = document.querySelector(".overlay")
const model = document.querySelector(".modal")
const closeD = document.querySelector('.close')



let transArr = []


const transList = document.querySelector('.transaction-list')

let ui = () => {
    transList.innerHTML = ""
    transArr.forEach(elem => {

        let color;
        let signn;

        if (elem.typee === "Income") {
            color = "#22c55e";
            signn = "+";
        } else {
            color = "#ef4444";
            signn = "-";
        }




        transList.innerHTML += `
        <div class="transaction">

            <div class="item">
              <span>Date</span>
              <p>${elem.date}</p >
              </div>

              <div class="item description">
              <span>Description</span>
              <p>${elem.description}</p>
            </div>

            <div class="item">
              <span>Category</span>
              <p>${elem.category}</p>
              </div>

              <div class="item amount">
              <div class="am">
              <span>Amount</span>
              </div>
              <div class="liones">
            <div class="sign">
                <p style="color:${color}">${signn}${elem.currency}</p>
            </div>

            <div class="amnum">
                <p style="color:${color}">${elem.amount}</p>
            </div>
            </div>
              
              </div>
              
              <div class="action">
              <a href="#">Actions</a>
              <i class="ri-more-2-fill"></i>
              </div>

              </div> 
              `



    })
}
 
 
ui()



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

const selEct = document.getElementById("curr");
const totalammountEL = document.querySelector('.totalamount')
const currentammountEL = document.querySelector('.currentamount')
const totalexpenseEL = document.querySelector('.totalexpense')

const applyBtn = document.querySelector('#applybtn')

const sign = document.querySelector('.sign')

selEct.addEventListener("change", () => {

    applyBtn.addEventListener('click', () => {

        let signn;
        let color;

        if (color = "#22c55e") {
            signn = "+"
        }
        else {
            signn = "-"
        }


        const currSym = selEct.value;
        document.querySelectorAll(".sign p").forEach(sign => {
            sign.textContent = signn+currSym; 
        });

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

applyBtn.addEventListener('click', () => {
    alert("Seetings Saved Sucessfully")
})

const savBtn = document.querySelector('#svbtn')

const desc = document.querySelector("#desc")
const amountf = document.querySelector("#amountf")

const exin = document.querySelector('#exin')


let totalIncome = 0;
let totalExpense = 0;

savBtn.addEventListener('click', () => {
    calculations()
})

let calculations = () => {

    const type = exin.value;
    const amountsEL = Number(amountf.value);

    if (type === "Income") {

        totalIncome += amountsEL;

        document.querySelectorAll(".amounttotal h1").forEach(amounttotal => {
            amounttotal.textContent = totalIncome;
        });

    } else {

        totalExpense += amountsEL;

        document.querySelectorAll(".expensetotal h1").forEach(expensetotal => {
            expensetotal.textContent = totalExpense;
        });
    }

    document.querySelectorAll(".amountcurrent h1").forEach(amountcurrent => {
        amountcurrent.textContent = totalIncome - totalExpense;
    });
}


savBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let descVL = desc.value
    let amountVL = amountf.value

    if (
        descVL.trim() === "" ||
        amountVL.trim() === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    const dateInput = document.getElementById("date");
    const date = dateInput.value;

    const [year, month, day] = date.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    const transaction = {
        typee: document.querySelector("#exin").value,
        date: formattedDate,
        description: desc.value,
        category: catagry.value,
        amount: Number(amountf.value),
        currency: selEct.value
    };

    transArr.push(transaction);


    ui()
    styleS()
    dateInput.value = new Date().toISOString().split("T")[0];

})

let styleS = () => {
    const form = document.querySelector("form");


    overlay.style.position = "relative"
    overlay.style.background = "transparent"
    overlay.style.backdropFilter = "none"

    model.style.display = "none"
    form.reset();
}





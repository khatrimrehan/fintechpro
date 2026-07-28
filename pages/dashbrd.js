window.addEventListener("DOMContentLoaded", () => {
    const dateInput = document.getElementById("date");
    dateInput.value = new Date().toISOString().split("T")[0];
});

let transArr = []

let ui = (abcd = "All transaction") => {
    const transList = document.querySelector('.transaction-list')


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


        if (abcd === "All transaction" || elem.typee === abcd) {

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
        }




    })
}
const transcatgry = () => {
    const catagrytrans = document.querySelector("#categorytrans");
    catagrytrans.addEventListener("change", () => {
        ui(catagrytrans.value);
    });
}
transcatgry()
ui()


const openClose = () => {
    const sliDer = document.querySelector(".slider")
    const main = document.querySelector(".main")
    const settings = document.querySelector(".settings")
    const overlay = document.querySelector(".overlay")
    const model = document.querySelector(".modal")
    const dashBtn = document.querySelector("#dash")
    const settingBtn = document.querySelector("#setting")
    const addBtn = document.querySelector("#adbtn")
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
}
openClose()

let totalIncome = 0;
let totalExpense = 0;
const selEct = document.getElementById("curr");
const applyBtn = document.querySelector('#applybtn')

const calculations = () => {

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

const styleS = () => {
    const form = document.querySelector("form");


    overlay.style.position = "relative"
    overlay.style.background = "transparent"
    overlay.style.backdropFilter = "none"

    model.style.display = "none"
    form.reset();
}

const symboleSelection = () => {
    const totalammountEL = document.querySelector('.totalamount')
    const currentammountEL = document.querySelector('.currentamount')
    const totalexpenseEL = document.querySelector('.totalexpense')
    const select = document.getElementById("category");

    selEct.addEventListener("change", () => {

        applyBtn.addEventListener('click', () => {

            const currSym = selEct.value;
            transArr.forEach((elem) => {
                elem.currency = currSym;
            });

            ui(catagrytrans.value);

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
}
symboleSelection()

const savealertBtn = () => {
    applyBtn.addEventListener("click", () => {
        alert("Settings Saved Successfully");
    });
}
savealertBtn()

const formSaveBtn = () => {
    const savBtn = document.querySelector('#svbtn')

    const desc = document.querySelector("#desc")
    const amountf = document.querySelector("#amountf")

    const exin = document.querySelector('#exin')
    const totalTransaction = document.querySelector("#totaltrans");

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
        totalTransaction.textContent = transArr.length;

        calculations()
        ui(catagrytrans.value)
        styleS()
        dateInput.value = new Date().toISOString().split("T")[0];

    })
}
formSaveBtn()

const searchFN = () => {

    const srch = document.querySelector("#search");

    srch.addEventListener("keyup", (e) => {

        const sName = e.target.value.toLowerCase().trim();

        const transactions = document.querySelectorAll(".transaction");

        if (sName === "") {
            transactions.forEach((transaction) => {
                transaction.style.display = "";
            });
            return;
        }

        const descriptions = document.querySelectorAll(".description p");

        descriptions.forEach((item) => {

            if (item.textContent.toLowerCase().includes(sName)) {
                item.closest(".transaction").style.display = "";
            } else {
                item.closest(".transaction").style.display = "none";
            }

        });

    });

}
searchFN()

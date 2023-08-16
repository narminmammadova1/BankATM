
const fullName = document.querySelector("#fullName");
const password = document.querySelector("#password");
const btnEnter = document.querySelector("#btnEnter");
const btnAdd = document.querySelector("#btnAdd");
const btnCash = document.querySelector("#btnCash");
const btnExit = document.querySelector("#btnExit");
const addInput = document.querySelector("#addInput");
const welcome = document.querySelector(".welcome");
const firstPage = document.querySelector("#firstPage");
const secondPage = document.querySelector("#secondPage");

const bankObj = {
    userInfo: [],
    balance: 200,
    add: function () {
        event.preventDefault();
        if (addInput.value === "") {
            alert("Please enter an amount.");
        } else {
            this.balance += parseFloat(addInput.value);
            let content = `Processing successful. Your Current balance ${this.balance} $.`;
            welcome.innerHTML = content;
            addInput.value = "";
        }
    },
    cash: function () {
        event.preventDefault();
        if (addInput.value === "") {
            alert("Please enter an amount");
        } else {
            if (addInput.value <= this.balance) {
                this.balance -= parseFloat(addInput.value);
                welcome.innerHTML = `Processing successful. Your Current balance ${this.balance} $.`;
                addInput.value = "";
            } else {
                alert("Low balance");
            }
        }
    },
    render: function () {
        firstPage.style.display = "none";
        secondPage.style.display = "block";
        let content = `Dear <span style="color:red;">${fullName.value}</span>, welcome to AyBank ATM.<br>Your Current balance ${this.balance} $.`;
        welcome.innerHTML = content;
        fullName.value = "";
    }
};
btnEnter.addEventListener("click", function () {
    event.preventDefault();
    const value = fullName.value;
    if (fullName.value === "" || password.value === "") {
        alert("Please enter your fullname and password");
    } else {
        bankObj.userInfo.push(value);
        bankObj.render();
    }
});

chk.addEventListener("change", function () {
    password.type = chk.checked ? "text" : "password";
});

btnAdd.addEventListener("click", function () {
    bankObj.add();
});

btnCash.addEventListener("click", function () {
    bankObj.cash();
});

btnExit.addEventListener("click", function () {
    firstPage.style.display = "block";
    secondPage.style.display = "none";
});

console.log(bankObj);

const fullName = document.querySelector("#fullName");
const password = document.querySelector("#password");
const btnEnter = document.querySelector("#btnEnter");
const btnAdd = document.querySelector("#btnAdd");
const btnCash = document.querySelector("#btnCash");
const btnExit=document.querySelector("#btnExit")
const addInput = document.querySelector("#addInput");
const welcome = document.querySelector(".welcome");
const firstPage = document.querySelector("#firstPage");
const secondPage = document.querySelector("#secondPage");
const cashMessage = document.querySelector("#cashMessage");
const container=document.querySelector(".container")
const chk = document.querySelector("#chk");
const thirdPage=document.querySelector("#thirdPage")
// const customerInfo = [];
let balance = 200;

btnEnter.
addEventListener("click", function () {
    event.preventDefault();
    const value = fullName.value;
    if(fullName.value==="" || password.value===""){alert("please enter your account and password")
    }
else{
//     customerInfo.
//    push(value);
render();
    console.log(customerInfo);
 
}});



chk.
addEventListener("change", function () {
    password.type = chk.checked ? "text" : "password";
});

// btnAdd.
// addEventListener("click", function () {
//     add();
// });

// btnCash.addEventListener("click", function () {
//     // render();
//     cash();
// });

// function render() {
//     firstPage.
// style.display = "none";
//     secondPage.style.display = "block";
//     let content = `Dear <span style="color:red;">${fullName.value}</span>, welcome to AyBank APP.<br>Your Current balance ${balance} $.`;
//     welcome.innerHTML = content;
//     fullName.value = "";
// }

// function add() {
//     if (addInput.value === "") {
// alert("Please enter an amount.");
//     } else {
//         balance += parseFloat(addInput.value);
//         let content = `Your Current balance ${balance} $.`;
//         welcome.
// innerHTML = content;
//         addInput.value = "";
//     }
// }


   
// function cash() {
// if (addInput.value === "") { 
// alert("Please enter an amount");
//     } 
    
// else {
//         if (addInput.value <= balance) {
//             balance -= parseFloat(addInput.value);
//             welcome.
// innerHTML = `Your Current balance ${balance} $.`;
//             cashMessage.
// innerHTML = `${addInput.value} $ is ready. Take it. Your current balance is ${balance} $.`;
//             addInput.value = "";
//         } else { 
// alert("Low balance");
//         }
//     }
// }
// btnExit.addEventListener("click",function(){
//     thirdPage.style.display="block"
// })

function render() {
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    let content = `Dear <span style="color:red;">${fullName.value}</span>, welcome to AyBank APP.<br>Your Current balance ${balance} $.`;
    welcome.innerHTML = content;
    fullName.value = "";
}


btnAdd.addEventListener("click", function () {
    add()
    // render();
});

btnCash.addEventListener("click", function () {
    // render()
    cash()
    ;
});



function add() {
    event.preventDefault();
    if (addInput.value === "") {
        alert("Please enter an amount.")}
         else {
        balance += parseFloat(addInput.value);
        let content = `Your Current balance ${balance} $.`;
        welcome.innerHTML = content;
        addInput.value = "";
    }
}

function cash() {
    event.preventDefault();
    if (addInput.value === "") { 
        alert("Please enter an amount");
    } else {
        if (addInput.value <= balance) {
            balance -= parseFloat(addInput.value);
            welcome.innerHTML = `Your Current balance ${balance} $.`;
            cashMessage.innerHTML = `${addInput.value} $ is ready. Take it. Your current balance is ${balance} $.`;
            addInput.value = "" }
             else { 
            alert("Low balance");
        }
    }
}

btnExit.addEventListener("click", function () {
    firstPage.style.display = "block";
});
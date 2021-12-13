let button = document.getElementById("button");
let inputBox = document.getElementById("inputText");
let para = document.getElementById("Example");

// button.addEventListener('click', () => {
//     para.innerHTML = inputBox.value;
// })

let direction = "";
let response = "";
const playerObj = {
    inventory: {
        weapons: [],
        utility: [],
        misc: {
        }
    },
}

// button.addEventListener('click', () => {
//     response = input.value;
// })

para.innerHTML = `Greetings, what is your name?`;

function thing1(){
    response = inputBox.value;
    inputBox.value = "";
    playerObj.name = response;
    para.innerHTML = `${playerObj.name}, what a strange name. Left or right?`;
    button.setAttribute("onClick", "thing2()");
}

function thing2() {
    response = inputBox.value;
    if (response === "Left") {
        para.innerHTML = "To the left theres a deer";    
        button.setAttribute("onClick", "thing3()");
    } else if (response === "Right") {
        para.innerHTML = "To the right theres a cat";
        button.setAttribute("onClick", "thing3()");
    } else {
        para.innerHTML = "Try again, left or right...";
    }
    inputBox.value = "";
}







// playerObj.inventory.utility[0];
// playerObj.inventory.misc.torch

// for (let i = 0; i < playerObj.inventory.utility.length; i++){
//     if (playerObj.inventory.utility[i] === "Bread") {
//         HP++;
//         playerObj.inventory.utility[i];
//         break;
//     }
// }


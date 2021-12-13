let button = document.getElementById("button");
let inputBox = document.getElementById("inputText");
let para = document.getElementById("text");
let para2 = document.getElementById("options")
let para3 = document.getElementById("bag")

// button.addEventListener(keypress, (event) => {
//     if (event.keyCode == 13){}
// })

const player = {
    name:"", 
    inventory: [
        "key"
    ]
}

para.innerHTML = `Name your character.`;

function red_room01(){
    response = inputBox.value
    inputBox.value = ""
    player.name = response
    para.innerHTML = `${player.name} has arrived in a small village. The locals have called him in to deal with a Demon living in a nearby house. When ${player.name} enters the house he finds himself in a triangular room with a door on each wall.`
    para2.innerHTML = `Where would you like ${player.name} to go? Left, Right or Back?`
    button.setAttribute("onClick", "travel01()")
    para3.innerHTML = `${player.inventory}`  
}

function travel01(){
    response = inputBox.value
    answer = response.toLowerCase("")
    if (answer === "left") {
        red_room02()
    } 
    else if (answer === "right") {
        red_door()
    }
    else if (answer === "back") {
        para.innerHTML = `${player.name} decides not to slay the demon. "Why risk my life for people I don't know?" ${player.name} thinks. Instead of saving innocent souls, ${player.name} goes looking for a pub.`
        para2.innerHTML = "GAME OVER"
        para3.innerHTML = ""
    } 
    else {
        para.innerHTML = "Try again...";
    }
    inputBox.value = "";
}

function red_door(){
    inputBox.value = ""
    for(let i=0; i<player.inventory.length; i++){
        if (player.inventory[i] === "key"){
            green_room01()
        }
        else{
            para.innerHTML = `${player.name} finds that this door is locked. It may require a key.`
            button.setAttribute("onClick", "travel01()")
           }
    }
}

function red_room02(){
    response = inputBox.value
    inputBox.value = ""
    para.innerHTML = `Through the left door ${player.name} finds a large square room decorated in all shades of red. It is obviously the dining room with a large wooden table running down the centre of the room. To the left there is a conservatory, in front there is a door and to the right the is a large portait.`
    para2.innerHTML = `Where would you like to go? Left, Forward, Right or Back?`
    button.setAttribute("onClick", "travel02()")
    para3.innerHTML = `${player.inventory}`  
}

function green_room01(){
    inputBox.value = "";
    para.innerHTML = `Adventure is not yet ready ${player.name} will have to be patient`
    button.setAttribute("onClick", "travel01()")
}
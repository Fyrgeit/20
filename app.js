const wrapperEl = document.getElementById("slots-wrapper");
const randomP = document.querySelector("#random-blob p");

const numRange = 1000;
const slotCount = 10;

let randomNum = 123;

let slots = Array(slotCount).fill(null);

function displaySlots() {
    wrapperEl.innerHTML = "";

    for (let i = 0; i < slotCount; i++) {
        let numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        let numberP = document.createElement("p");
        numberP.innerHTML = i + 1;

        numberDiv.append(numberP);
        
        let slotDiv = document.createElement("div");
        slotDiv.classList.add("slot");
        if (slots[i] != null) slotDiv.classList.add("occupied");
        slotDiv.numId = i;
        slotDiv.addEventListener("click", setNum);
        let slotP = document.createElement("p");
        slotP.innerHTML = slots[i];
        
        slotDiv.append(slotP);

        let slotWrapper = document.createElement("div");
        slotWrapper.classList.add("slot-wrapper");
        slotWrapper.append(numberDiv);
        slotWrapper.append(slotDiv);
        wrapperEl.append(slotWrapper);
    }
}

function setNum(event) {
    if (event.currentTarget.classList.contains("occupied")) return;
    slots[event.currentTarget.numId] = randomNum;
    displaySlots();
    newNumber();
}

function newNumber() {
    randomNum = Math.floor(Math.random() * numRange);
    randomP.innerHTML = randomNum;
}

displaySlots();
newNumber();
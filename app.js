const wrapperEl = document.getElementById("slots-wrapper");
const randomP = document.querySelector("#random-blob p");

const numRange = 1000;
const slotCount = 25;

const placeHolder = "###";

let randomNum;

let slots = Array(slotCount + 2).fill(placeHolder);
slots[0] = 0;
slots[slotCount + 1] = numRange;

function displaySlots() {
    wrapperEl.innerHTML = "";

    for (let i = 1; i < slotCount + 1; i++) {
        let numberDiv = document.createElement("div");
        numberDiv.classList.add("number");
        let numberP = document.createElement("p");
        numberP.innerHTML = i;

        numberDiv.append(numberP);
        
        let slotDiv = document.createElement("div");
        slotDiv.classList.add("slot");

        if (slots[i] == placeHolder) {
            let topLimit;
            let n = i;
            do n--; while (slots[n] == placeHolder);
            topLimit = slots[n];

            let bottomLimit;
            n = i;
            do n++; while (slots[n] == placeHolder);
            bottomLimit = slots[n];

            slotDiv.classList.add(topLimit);

            if (randomNum >= topLimit && randomNum <= bottomLimit){
                slotDiv.classList.add("valid");
            } else {
                slotDiv.classList.add("invalid");
            }
        } else {
            slotDiv.classList.add("occupied");
        }

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
    if (event.currentTarget.classList.contains("invalid")) return;
    slots[event.currentTarget.numId] = randomNum;
    newNumber();
    displaySlots();
}

function newNumber() {
    randomNum = Math.floor(Math.random() * numRange);
    randomP.innerHTML = randomNum;
}

newNumber();
displaySlots();
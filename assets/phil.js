let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector(".card-header");

document.querySelector(".card-body").addEventListener("click", (event) => {

    // screen.innerText = event.target.innerText; moved to gunvtion rerender();
    buttonClick(event.target.innerText);
    rerender();
});

const buttonClick = (value) => {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

const handleNumber = (value) => {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

const handleSymbol = (value) => {
    switch (value) {
        case "AC":
            buffer = "0";
            runningTotal = 0;
            break;
        case "=":
            if (previousOperator === null) {
                return
            }
    }
}

const handleMath = (buffer)=>{
    if (buffer === "0"){
        // do nothing
        return;
    }
    const intBuffer = parseInt(buffer);
    if(runningTotal === 0){
        runningTotal = intBuffer;
    } else {
        flushOperation 
    }

previousOperator = value;
buffer = "0";
}

const flushOperation = (intBuffer) => {
    if (previousOperator === "+"){
        runningTotal += intBuffer;
    } else  if (previousOperator === "-"){
        runningTotal -= intBuffer;
    } else  if (previousOperator === "x"){
        runningTotal *= intBuffer;
    } else  {
        runningTotal /= intBuffer;
    }
}

const rerender = () => {
    screen.textContent = buffer;
}
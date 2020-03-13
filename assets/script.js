let btns = document.querySelectorAll("button");
let result = document.querySelector(".result");


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        //alert("hi");

        if (btn.innerText.trim()== "AC") {
            result.innerText = 0;
           
        } else if (btn.innerText.trim()== "+/-") {
            let res = eval((result.innerText.trim()));
            result.innerText = eval(-(res));

        } else if (btn.innerText.trim() == "x") {
            result.innerText += '*';
        } else if(btn.innerText.trim() == "%"){
            result.innerText = result.innerText/100;
        }else if (btn.innerText.trim() == "=") {
            let res = eval(result.innerText.trim());

            if (Number.isInteger(res)) {
                result.innerText = res;

            } else {
                result.innerText = res.toFixed(4);
            }

        } else if (result.innerText.trim() != 0) {
            result.innerText += btn.innerText.trim();
        } else {
            result.innerText = btn.innerText.trim();
        }
    });
});
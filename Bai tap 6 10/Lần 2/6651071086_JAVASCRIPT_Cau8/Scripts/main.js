let operator = "+";

function calculate(){
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    let result;

    if(Number.isNaN(a) || Number.isNaN(b)){
        document.getElementById("message").textContent = "Biểu thức không hợp lệ.";
        return;
    }

    if(operator === "+") result = a + b;
    else if(operator === "-") result = a - b;
    else if(operator === "*") result = a * b;
    else if(operator === "/"){
        if(b === 0){
            document.getElementById("message").textContent = "Không thể chia cho 0.";
            return;
        }
        result = a / b;
    }
    else if(operator === "^") result = Math.pow(a,b);

    document.getElementById("result").value = result;
    document.getElementById("message").textContent = a + " " + operator + " " + b + " = " + result;
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".op").forEach(function(btn){
        btn.addEventListener("click", function(){
            operator = this.dataset.op;
            document.querySelectorAll(".op").forEach(b => b.style.background = "");
            this.style.background = "#174a8b";
            calculate();
        });
    });

    ["num1","num2"].forEach(id => {
        document.getElementById(id).addEventListener("input", calculate);
    });

    document.addEventListener("keydown", function(e){
        if(["+","-","*","/","^"].includes(e.key)){
            operator = e.key;
            calculate();
        }
        if(e.key === "Enter") calculate();
    });

    calculate();
});
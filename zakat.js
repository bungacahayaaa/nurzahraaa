
        "use strict";
        function calc() {
            let income = document.getElementById("income").value;
            income = parseFloat(income);
            let taxed = income * 0.184
            
            income *= 0.816

            document.getElementById("result").innerHTML = "Net income = " + income.toFixed(2) 
                                + "<br>Amount Taxed = " + taxed.toFixed(2);
        }
    
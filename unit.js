"use strict";
        function convert() {
            let initial = document.getElementById("initial").value;
            let final = document.getElementById("final").value;
            let value = document.getElementById("value").value;
            let converted;
            value = parseInt(value);

            switch (initial) {
                case "cm":
                    if (final == "cm") converted = value;
                    else if (final == "m") converted = value/100;
                    else converted = value/100000;
                    break;
                case "m":
                    if (final == "cm") converted = value * 100;
                    else if (final == "m") converted = value;
                    else converted = value/1000;
                    break;
                case "km":
                    if (final == "cm") converted = value*100000;
                    else if (final == "m") converted = value*1000;
                    else converted = value;
                    break;
            }

            document.getElementById("result").innerHTML = value + " " + initial + " to " + final + " is equals to " + converted + " " + final;
        }
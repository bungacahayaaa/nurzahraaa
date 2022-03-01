
        function CAL() {
    let RST = document.getElementById('Result');
    let WGT = document.getElementById('Weight');
    let HGT = document.getElementById('Height');
    let BMI = WGT.value / HGT.value / HGT.value;
    let DGN = '';

    if (BMI < 16.0)
        DGN = 'Severely Underweight';
    else if (BMI < 18.5)
        DGN = 'Underweight';
    else if (BMI < 25.0)
        DGN = 'Normal';
    else if (BMI < 30.0)
        DGN = 'Overweight';
    else if (BMI < 35.0)
        DGN = 'Moderately Obese';
    else if (BMI < 40.0)
        DGN = 'Severely Obese';
    else
        DGN = 'Morbidly Obese';

    RST.value = 'BMI: ' + BMI.toFixed(1) + ' - ' + DGN;
}

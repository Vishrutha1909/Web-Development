function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

document.getElementById("bmiForm").addEventListener("submit", function(event){
    event.preventDefault();
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = bmiCalculator(weight, height);
    document.getElementById("result").innerText = "BMI : " + bmi;
})
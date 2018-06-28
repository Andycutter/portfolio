function BMICalculator(){
};

BMICalculator.prototype.metric_bmi = function(obj) {
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
        var finalBMI = weight / (height * height / 10000);
        obj.bmiValue = parseFloat(finalBMI.toFixed(2));
        setBMIMessage(obj);
    }  
};
function setBMIMessage (obj){
    if (obj.bmiValue < 18.5) {
        obj.bmiMessage = "underweight"
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = "healthy"
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = "overweight"
    }
    if (obj.bmiValue > 30) {
        obj.bmiMessage = "obese"
    }
}
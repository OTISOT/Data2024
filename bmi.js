var weight = 64;
var height = 173;
var bmi = weight/((height/100)**2);

function calcbmi()
{
    var weight =Number(document.getElementById("wei").value)
    var height = document.getElementById("hei").value
    var bmi = weight/((height/100)**2);
    document.getElementById("bmi").innerHTML=bmi;
    console.log("hello! Your BMI Value is "+bmi);   
}

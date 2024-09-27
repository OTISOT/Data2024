var readline = require("readline-sync");
var weight = readline.questionInt("plz input your weight");
var height = readline.questionInt("plz input your height");
var bmi = weight/((height/100)**2);
switch (bmi )
{case 0 , 18.5:
    cout <<"體重過輕"<<end1;
    break;
    case 18.5 , 24:
    cout << "健康體位"<<end1;
    break;
    case 24 , 27:
    cout <<"過重"<<end1;
    break;
    case 27 , 30:
    cout <<"輕度肥胖"<<end1;
    break;
    case 30 , 35:
    cout <<"中度肥胖"<<end1;
    break;
    default:
        cout <<"重度肥胖"<<end1;
        break;
}

console.log("hello! Your BMI Value is "+bmi);   

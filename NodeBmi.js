var readline = require("readline-sync");
var weight = readline.questionInt("plz input your weight");
var height = readline.questionInt("plz input your height");
var bmi = weight/((height/100)**2);
var resultStr=["體重過輕","健康體位","過重","輕度肥胖","中度肥胖","重度肥胖"];
var ary=[[1,2,3],[4,5,7],[7,8,9]];
var ary2=[{name:"john",age:18,class:"MD2",team:["B001","C02"]},{},{}]//json Object Notation

if(bmi<18.5){
    console.log(resultStr[0]);
}else if( bmi<24){
    console.log(resultStr[1]);
}
if(bmi<27){
    console.log(resultStr[2])
}else if(bmi<30){
    console.log(resultStr[3])
}else if(bmi<35){
    console.log(resultStr[4])
}else{
    console.log(resultStr[5]);
}
console.log("hello! Your BMI Value is "+bmi);   

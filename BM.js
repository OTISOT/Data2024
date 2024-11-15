var opening = [];
var isMatched = true 
var CC = "(][[9]"

function bracketMatch(inputString)
{
    var opening = [];
    var isMatched = true   
    var symbol = inputString.charAt( i = 0)
    while(isMatched&&symbol!=''){
        if(symbol=='{'||symbol=='('||symbol=='[')
            opening.push(symbol);
        if(symbol=='}'||symbol==')'||symbol==']')
            if(opening.length==0)isMatched=false
        else{
            match = opening.pop()
            isMatched =  (symbol == '}' && match=='{') || (symbol == ')' && match=='(') ||
            (symbol == ']' && match=='[');

        }
    }
         symbol = inputString.charAt(++i)
    }
    if(opening.length>0||!isMatched)return'unmatched'

    console.log =(bracketMatch(CC))


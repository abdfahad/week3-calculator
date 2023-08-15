module.exports.calculator = function(expr){
    return Number(parseInputString(resolveParanthesis(expr)));
}


//Function: Evaluate arithmetic expressions within paranthesis
//Input: A string with the arithmetic expression
//Output: A string of numbers and symbols(Arithmetic operators) with all paranthesis resolved
function resolveParanthesis(expr){

    //Initiating a stack to keep track of paranthesis
    let stack = [];
    let top;
    console.log(expr.indexOf('('));
    //Checking whether the given string has paranthesis
    if(expr.indexOf('(') != -1){
        top = -1;
    }else if((expr.indexOf('(') == -1 && expr.indexOf(')') != -1) || (expr.indexOf('(') > expr.indexOf(')'))){
        throw new Error("Unbalanced Paranthesis");
    }
    else{
        //console.log("No paranthesis");
        return expr;
    }

    //Going through the string
    for(let i=0; i<expr.length; i++){
        expr[i] = expr[i]
        
        //Pushing all characters except opening paranthesis into the stack
        if(expr[i] != ')'){
            stack.push(expr[i].trim());
            top++;
        }else{
            //Evaluating expression within the bounds of current paranthesis
            let subExpr = '';
            while(stack[top] != '('){
                subExpr += reverseString(stack[top]);
                stack.pop();
                top--;
            }
            subExpr = parseInputString(reverseString(subExpr));

            //Pushing the evaluated result back into the stack
            stack[top] = String(subExpr);
        }
    }
    //Checking for any unresolved paranthesis
    if(stack.includes('(') || stack.includes(')') || top<0){
        throw new Error('Unresolved Paranthesis');
    }
    //Returing the array of characters
    return stack.join('');
}

//Function: Reverses a given string
//Input: A string
//Output: The reversed string
function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

//Function: Parses the string and seperately bundles numbers and operators in an array
//Input: A string of numbers and arithmetic operators
//Output: evaluated result
function parseInputString(expr){
    let op = ['/','*','+','-'];
    let arr = [];
    //j keeps track of positions in the array arr
    //ptr keeps track of current numbers being parsed
    let ptr = 0, j = 0;
    for( let i=0; i<expr.length; i++){
        if(op.includes(expr[i])){
            //Extracting the numbers from the string
            arr[j++] = expr.slice(ptr,i).trim();
            ptr = i; i++;
            
            //Extracting the operators from the string
            arr[j++] = expr.slice(ptr,i).trim();
            ptr++;
        }
    }
    
    //Extracting the last number
    arr[j] = expr.slice(ptr,expr.length);
    if(arr[0] == ''){
        arr.shift();
    }
    //Support for expressions starting with - sign
    if(arr[0]== '-'){
        if(arr[1][0] == '-'){
            arr[0] = arr[1].slice(1);
        }else{
            arr[0] = arr[0] + arr[1];
        }
        arr.splice(1,1);
    }
    console.log(arr);
    return Number(evaluateInput(arr));
}

//Function: Call evaluate function setting precedence of operators
//Input: Array of numbers and arithmetic operators
//Output: The result of the evaluation from the evaluate function
function evaluateInput(expr){
    return evaluate(evaluate(evaluate(evaluate(expr,'/'),'*'),'-'),'+');
}

//Evaluates arithmetic operations corresponding to a given arithmetic operation
//Input: array of numbers and arithmetic operators, the arithmetic operator
//Output: array with all operations relating to a given arithmetic operation resolved.
function evaluate(expr,op){
    let i=0;
    while(i < expr.length){
        if(expr[i] == op){
            expr.splice(i-1,3,resolveOp(expr[i-1],op,expr[i+1]));
            i--;
        }
        i++;
    }
    return expr;
}


//Function: Evaluate the result of arithmetic operation
//Input: Number 1, operator and Number 2 
//Output: Evaluated result
function resolveOp(val1, op, val2){
    if(val1){
        val1 = Number(val1);
    }else{
        return Number(op+val2);
    }
    val2 = Number(val2);
    switch(op){
        case '/':
            //Support for division by zero error
            if(val2 == 0){
                throw new Error('Division by Zero error');
            }
            return (val1/val2).toFixed(2);
        case '*':
            return (val1*val2).toFixed(2);
        case '+':
            return val1+val2;
        case '-':
            return val1-val2;
        default:
            throw new Error('Cannot perform Arithmetic operation');
            
    }
}




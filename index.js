function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}


function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormatedNumber(num);
    }
    // document.getElementById("output-value").innerText=getFormatedNumber(num);
}

function getFormatedNumber(num){
    if(num=="-"){
        return " ";
    }
    var n = Number(num);
    var value = n.toLocaleString("en")
    return value;
}


function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}


var operator  = document.getElementsByClassName('operator');
for(var i=0; i<operator.length; i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory(" ");
            printOutput(" ");
        // alert("efesdd"+this.id);
        }
        else if(this.id=="backspace"){
            var output = reverseNumberFormat(getOutput()).toString();
            if(output){//if output has value
            output = output.substr(0, output.length-1);
            printOutput(output);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output = output==""?
                output:reverseNumberFormat(output);
                history = history+output;
                if(this.id=="="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history+this.id;
                    printHistory(history);
                    printOutput("")
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i=0 ; i < number.length ; i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumberFormat(getOutput());
        if(output!=NaN){
            output = output+this.id;
            printOutput(output);
        }
    });
}























// // Score Board
// var p1Button = document.querySelector("#p1");
// var p2Button = document.querySelector("#p2");
// var p1Display = document.querySelector("#p1display");
// var p1score = 0;
// var p2Display = document.querySelector("#p2display");
// var p2score = 0;
// var gameOver = false;
// var winningscore = 5;

// var numInput = document.querySelector("input[type = 'number']");
// var resetButton = document.querySelector("#reset");
// var turn = document.querySelector("p span");

// p1Button.addEventListener("click", function(){
//     if(!gameOver){
//         p1score+=1;
//         if(p1score === winningscore){
//             p1Display.classList.add("winner");
//             gameOver = true;
//         }
//         p1Display.textContent = p1score;        
//     }
// });

// p2Button.addEventListener("click", function(){
//     if(!gameOver){
//         p2score+=1;
//         if(p2score === winningscore){
//             p2Display.classList.add("winner");
//             gameOver = true;
//         }
//         p2Display.textContent = p2score;       
//     }

// });


// resetButton.addEventListener("click", function(){
//     reset();
// });

// function reset(){
//     p1score = 0;
//     p2score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
//     p1Display.classList.remove("winner");
//     p2Display.classList.remove("winner");
//     gameOver = false;
// }

// numInput.addEventListener("change",function(){
//     turn.textContent = numInput.value;
//     winningscore = Number(numInput.value)
//     reset();
// })
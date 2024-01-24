
function touch(){

    document.querySelector('.art').classList.add('show');
    


}

function close(){
    document.querySelector('.art').classList.remove('show');
    document.querySelector('.details').classList.remove('showdetail')
}
function home(){
      document.querySelector('.home').classList.add('homeshow')
      document.querySelector('.help').classList.remove('showhelp')
      document.querySelector('.details').classList.remove('showdetail')
}
function home1(){
      document.querySelector('.home').classList.remove('homeshow')
      document.querySelector('.help').classList.remove('showhelp')
      document.querySelector('.details').classList.remove('showdetail')
}
function help(){
    document.querySelector('.help').classList.add('showhelp')
    document.querySelector('.details').classList.remove('showdetail')
    document.querySelector('.home').classList.remove('homeshow')
}
function cont(){
    document.querySelector('.details').classList.add('showdetail')
    document.querySelector('.help').classList.remove('showhelp')
    // document.querySelector('.details').classList.remove('showdetail')
}
function more(){
    document.querySelector('.nothing').classList.add('shownothing')
}


var c = document.querySelector("i");
c.addEventListener("click", close);


//   backend

function heartcheck(){

var f1 = document.getElementById("f1").value;
var f2 = document.getElementById("f2").value;
var f3 = document.getElementById("f3").value;
var f4 = document.getElementById("f4").value;

var result = "AGE:-  ";
var result1 = "heart rate:-    "
var result2 = "DIEBETES:-   "
var result3 = "GENDER :-   "

if (f1 < 30){

result += "in condition"
}else if (f1 <= 30 && f1 >= 60){
result += "normal"
}else{
result+= "need attition"
}

if (f2 > 60){

result1 += "somthing going wrong"
}else if (f2 < 60 && f2 > 120){

result1 += "perfect"
}else{
result1 += "invalid heart rate"
}

if(f3 === "yes"){

result2 += "low"
}else if(f3 === "no"){

result2 += "high"
}else{
result2 += "wrong"
}

if(f4 === "male"){

result += "low"
}else if(f4 === "female"){

result += "high"
}else{
result += "wrong"
}

document.getElementById("result").innerText= result;
document.getElementById("result1").innerText= result1;
document.getElementById("result2").innerText= result2;
document.getElementById("result3").innerText= result3;


}
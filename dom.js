document.title="DOM in JavaScript";
document.body.style.backgroundColor= "lightblue";
//document.getElementById("header").innerHTML="HELLO WORLD!";//
//document.getElementById("para").innerHTML="Welcome to DOM Manipulation";//
document.getElementsByTagName("h1")[1].style.color="red";
document.getElementsByClassName("DS")[0].style.color="purple";
document.getElementsByClassName("DS")[1].style.color="blue";
document.getElementsByClassName("DS")[2].style.color="brown";
document.getElementsByClassName("DS")[0].style.fontSize="20px";
document.getElementsByClassName("DS")[1].style.fontSize="20px";
document.getElementsByClassName("DS")[2].style.fontSize="20px";

let 
Sindhu=document.getElementsByClassName("CSE");
Sindhu[0].style.color="green";
Sindhu[1].style.color="brown";

document.querySelector(".CSE").style.color="red";

let dept=document.querySelectorAll(".CS");
dept[0].style.color="brown";
dept[1].style.color="green";
/*
function changeBackground(){
    document.body.style.backgroundColor="pink";
}*/
function changeBackground(){

    if (document.body.style.backgroundColor==="red")
    {
        document.body.style.backgroundColor="blue";
    } else {
        document.body.style.backgroundColor="red";
    }
    
}

function changeBackground(){
    document.body.style.backgroundColor=document.body.style.backgroundColor ==="green"? "lightblue":"pink";
}
function changetext(){
    document.getElementById("clg").innerHTML="MRCET,hyd";
    document.getElementById("clg").style.backgroundColor="green";
}
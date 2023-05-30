
let parent = document.getElementById("parent1");
let input = document.getElementById("input");
let postra = document.getElementById("postra");
let backgroundName = "" ;
// if (input.style.backgroundColor == "transparent"){
//   input.style.color = "#000";
// }
console.log(backgroundName);
let num = 0;

setInterval(

  function (){

      let body = document.getElementById("bodys")
      body.style.height = "100vh" ; 
      body.style.backgroundImage = `linear-gradient(90deg, #3e32a8,#ff0033)` ; 
      body.style.width = "100%" ; 
  }
    
, 1000)

function postBtn() {


  let input = document.getElementById("input");
++num;
if (input.value.trim() !== "" ){
 postra.innerHTML += `<div class="new"  id="delete-li"  >
    <div class="logo-button">
       <div class="logo-button-child1"><img src="public/facbooklogo.jpg" alt=""></div>
       <div class="logo-button-child2"><h6>Muhammad Usman</h6> 
            <p style="margin-left:20px;"  id="time${num}"></p>
            </div>
              <p style="margin-left:20%;color:red; margin-top:20px;font-size:30px;"onclick="deletePost(this)"><i class="fa-solid fa-trash"></i></p></div>
    <div class="sulah" style="text-align:center; color:white;" id="poster${num}">
       <div class="text-controll">${input.value} </div>  
   </div>
   <div class="like-box" >
   <i class="fa-regular fa-thumbs-up"onclick="likeBtn(this)"><span id="like-count">19</span><span>Like</span></i>
   <i class="fa-regular fa-comment"onclick="likeBtn(this)"><span>10</span><span>Comment</span></i>
   <i class="fa-solid fa-share"onclick="likeBtn(this)"><span>5</span><span>Share</span></i></div>
 </div>
 </div> `;

 let poster = document.getElementById(`poster${num}`);
 let currentTime = new Date();
 let time = document.getElementById(`time${num}` );
  setInterval(function (){
        time.innerHTML = moment(currentTime).fromNow();
      },1000)
console.log(time)



  if (input.style.backgroundColor == "brown") {
    poster.style.backgroundColor = "brown";
    poster.style.color = "#fff";
    poster.style.textAlign = "center"
    poster.style.paddingTop = "20px";
  }
  else if (input.style.backgroundColor == "yellow") {
    poster.style.backgroundColor = "yellow";
    poster.style.color = "#000";
    poster.style.textAlign = "center"
    poster.style.paddingTop = "20px";

  }

  else if (input.style.backgroundColor == "green") {
    poster.style.backgroundColor = "green";
    poster.style.color = "#fff";
    poster.style.textAlign = "center"
    poster.style.paddingTop = "20px";
  }

  else if (input.style.backgroundColor == "red") {
    poster.style.backgroundColor = "red";
    poster.style.color = "#fff";
    poster.style.textAlign = "center"
    poster.style.paddingTop = "20px";
  }

  else if (input.style.backgroundColor == "pink") {
    poster.style.backgroundColor = "pink";
    poster.style.color = "#fff";
    poster.style.textAlign = "center"
    poster.style.paddingTop = "20px";
  }
  else if (input.style.backgroundColor == "white") {
    poster.style.backgroundColor = "white";
    poster.style.color = "#000";
    poster.style.textAlign = "center"
    poster.style.paddingTop = "20px";
  }
}
else{
 alert("input not filled") }
  input.value = "";
  input.style.backgroundColor = "";
  

}
let con = false ;
function likeBtn(e) {
  // con = false;
  let count = 19 ;
    let likeCount = document.getElementById("like-count");
     if(con == true){
      e.style.color = "blue"
      con = false;
      likeCount.innerText = ++count;
     } 
     else{
      e.style.color = "gray"
      con = true;
      likeCount.innerText = count--;
     }
    //  else if (e.style.color = "blue"){
    //   e.style.color = ""
    //  }
     
}
function deletePost(e) {
  e.parentNode.parentNode.remove() ;
   console.log(e.parentNode.parentNode.parentNode)
  // console.log(deleteLi.parentNode.childNodes[1])
}
// var backgroundColor1 = "";
// input.style.backgroundColor = "brown";
function colorBtn1() {
  input.style.backgroundColor = "brown";
  if (input.style.backgroundColor == "brown") {
    input.style.color = "#fff";
  }
}

function colorBtn2() {
  input.style.backgroundColor = "red";
  if (input.style.backgroundColor == "red") {
    input.style.color = "#fff";
  }
}
function colorBtn3() {
  input.style.backgroundColor = "green";
  if (input.style.backgroundColor == "green") {
    input.style.color = "#fff";
  }                                              
}
function colorBtn4() {
  input.style.backgroundColor = "yellow";
  if (input.style.backgroundColor == "yellow") {
    input.style.color = "#000";
  }
}
function colorBtn5() {
  input.style.backgroundColor = "pink";
  if (input.style.backgroundColor == "pink") {
    input.style.color = "#fff";
  }

}

function colorBtn6() {
  input.style.backgroundColor = "white";
  if (input.style.backgroundColor == "white") {
    input.style.color = "#000";
  }
}



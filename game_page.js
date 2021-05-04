player_1= localStorage.getItem("Player 1 Name")
player_2= localStorage.getItem("Player 2 Name")

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player_1+":"
document.getElementById("player2_name").innerHTML=player_2+":"

document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score

document.getElementById("player_question").innerHTML="Question Turn-"+ player_1
document.getElementById("player_answer").innerHTML="Answer Turn-"+ player_2

function send(){
num1=document.getElementById("num1").value;
num2=document.getElementById("num2").value;
question= num1+"x"+num2

if(document.getElementById("num1").value==""){
  window.alert("Number 1 is required")
}
if(document.getElementById("num2").value==""){
  window.alert("Number 2 is required")
}
else{
  question_word= "<h4 id='word_display'>Q. "+question +"</h4>";
  input_box= "<br>Answer: <input type='number' id='input_check_box'>"
  check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
  row= question_word+input_box+check_button;
  document.getElementById("output").innerHTML= row;
  document.getElementById("num1").value="";
  document.getElementById("num2").value="";

}




/*question_word= "<h4 id='word_display'>Q. "+question +"</h4>";
input_box= "<br>Answer: <input type='number' id='input_check_box'>"
check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row= question_word+input_box+check_button;
document.getElementById("output").innerHTML= row;
document.getElementById("num1").value="";
document.getElementById("num2").value="";*/
}


var readlineSync=require("readline-sync");
var score=0;
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer==answer){
    console.log("you were right!")
    score+=1
  }
  else {
    console.log("you were wrong!")
    score-=1

  }

}
play("where do i work","microsoft")
play("where doI live? " ,"Delhi")
console.log("your score is " ,score)



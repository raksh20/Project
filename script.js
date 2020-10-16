var questions=[{
question:"The day on which the Sun's direct rays cross the celestial equator is called?",
option1:"The aphelion",
option2:"The solstice",
option3:"The ecliptic",
option4:"The equinox",
answer:4,
answered:false,
ans:"The equinox",
check:null,
scores:0
},
{
question:"Who invented the telescope?",
option1:"Hans Lippershey",
option2:"Johannes Kepler",
option3:"Galileo",
option4:"Hypatia",
answer:1,
ans:"Hans Lippershey",
answered:false,
check:null,
scores:0
},
{
question:"Which of these objects is the farthest from the Sun?",
option1:"Neptune",
option2:"Saturn",
option3:"90377 Sedna",
option4:"Kuiper belt",
answer:3,
ans:"90377 Sedna",
answered:false,
check:null,
scores:0
},
{
question:"What term describes the alignment of three celestial bodies?",
option1:"Symbology",
option2:"Sizzle",
option3:"Syzygy", 
option4:"Suzerainty",
answer:3,
ans:"Syzygy",
answered:false,
check:null,
scores:0
},
{
question:"What is the visible part of the Sun called?",
option1:"The stratosphere",
option2:"The photosphere",
option3:"The lithosphere",
option4:"The atmosphere",
answer:2,
ans:"The photosphere",
answered:false,
check:null,
scores:0
},
{
question:"How many times larger is the radius of the Sun than that of the Earth?",
option1:"109",
option2:"1,025",
option3:"4.8",
option4:"10",
answer:1,
ans:"109",
answered:false,
check:null,
scores:0
},
{
question:"Which is the name of a radio source that is very far from Earth?",
option1:"Phaser",
option2:"Quasar",
option3:"Taser",
option4:"Tracer",
answer:2,
ans:"Quasar",
answered:false,
check:null,
scores:0
},
{
question:"What is the nucleus of a comet made of?",
option1:"Ice, dust, and organic materials",
option2:"Radio waves",
option3:"Fire",
option4:"Helium and water",
answer:1,
ans:"Ice, dust, and organic materials",
answered:false,
check:null,
scores:0
},
{
question:"When was Pluto removed from the list of planets?",
option1:"2000",
option2:"2003",
option3:"2008",
option4:"2006",
answer:4,
ans:"2006",
answered:false,
check:null,
scores:0
},
{
question:"Which planets do not have a natural satellite?",
option1:"Mercury and Neptune",
option2:"Mercury and Venus",
option3:"Mercury and Saturn",
option4:"Uranus and Venus",
answer:2,
ans:"Mercury and Venus",
answered:false,
check:null,
scores:0
}
];

var addscore=[];
var count=0;
var prevCount=0;
var quesCount=0;
var currentQues={};
var shuffledQues=[];
var prevIndex;
var answers=[];
var finalScore=0;
var index1;
var index=0;
var randomIndex;

var scoreContainer=document.getElementById("scoreContainer");
var body=document.querySelector("body");
var quiz=document.getElementById("quiz");
var result=document.getElementById("result");
var ques=document.getElementById("ques");
var op1=document.getElementById(1);
var op2=document.getElementById(2);
var op3=document.getElementById(3);
var op4=document.getElementById(4);
var ansMessage=document.getElementById("ans");
var options=document.getElementsByClassName("options");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const submit=document.getElementById("submit");
const startbtn=document.getElementById("start");
const name=document.getElementById("name");
var username=document.getElementById("myname");


function shuffle(arr1)
{
  var len=arr1.length,index,temp;
  while(len>0)
  {
    index=Math.floor(Math.random()*len);
    len--;
    temp=arr1[len];
    arr1[len]=arr1[index];
    arr1[index]=temp;
   }
   return(arr1);
}   
var arr=[];
for(i=0;i<=9;i++)
{
  arr.push(i);
}
var randomNo=shuffle(arr);

for(var i of randomNo){
	shuffledQues.push(questions[i]);
}

var num=1;
shuffledQues.forEach(function (element) {
	
	for(i=10;i>=num;i--){
  	element.number = i;
 	}
 	num++;
});


startbtn.addEventListener("click",startGame);

//Quiz starts here
function startGame(questions){
	
	startbtn.classList.add("hide");
	name.classList.add("hide");

	document.getElementById("navbar").classList.remove("hide");
	document.getElementById("quiz").classList.remove("hide");
	document.getElementById("timer").classList.remove("hide");
	next.classList.remove("hide");

	newQuestion();

}

//Display of new question
function newQuestion(){

	quesCount++;
	currentQues=shuffledQues[index];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	
	clickAns();

	if(currentQues.answered){
		
		if(currentQues.check=="CORRECT"){
			ansMessage.innerHTML="CORRECT"
			quiz.style.background="#76ff03";
  			body.style.background="green";
  			ansMessage.style.color="#76ff03";
		}
		else{
			ansMessage.innerHTML="WRONG. Correct answer is "+currentQues.ans;
			quiz.style.background="#ef5350";
  			body.style.background="#d50000";
  			ansMessage.style.color="black";

		}
	}
	else{
  		quiz.style.background="white";
  		body.style.backgroundImage='url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg")';
  		
  		body.style.backgroundSize='cover';
  		ansMessage.innerHTML="";
  	}
  	if(shuffledQues.number==10){
  		submit.classList.remove("hide");
  		next.classList.add("hide");
  	}

}

//Display of previous question
function prevQuestion(){
	
	console.log("previndex"+prevIndex);
	currentQues=shuffledQues[prevIndex];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	
	if(currentQues.answered){
		
		if(currentQues.check=="CORRECT"){
			ansMessage.innerHTML="CORRECT"
			quiz.style.background="#76ff03";
  			body.style.background="green";
  			ansMessage.style.color="#76ff03";
		}
		else{
			ansMessage.innerHTML="WRONG. Correct answer is "+currentQues.ans;
			quiz.style.background="#ef5350";
  			body.style.background="#d50000";
  			ansMessage.style.color="black";

		}
	}
	
	
  	else{
  		quiz.style.background="white";
  		body.style.backgroundImage='url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg")';
  		body.style.backgroundSize='cover';
  		ansMessage.innerHTML="";
	  	next.disabled=false;
	  	op1.disabled=false;
		op2.disabled=false;
		op3.disabled=false;
		op4.disabled=false;

		prevClickAns();
	}

}

//Function for clicking answers
function clickAns(){
	currentQues=shuffledQues[index];
	
	document.getElementById("ans").classList.remove("hide");

	for(var i=0;i<4;i++){
		
  		var list = document.getElementsByClassName("options")[0];
  		if(list.getElementsByClassName(i+1)[0].className==currentQues.answer){

  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
	  		currentQues.answered=true;
	  		currentQues.check="CORRECT";
			currentQues.scores=1;
			next.classList.remove("hide");
			prev.classList.remove("hide");
			quiz.style.background="#76ff03";
			body.style.background="green";
			ansMessage.style.color="#76ff03";
  			count++;
  			answers.push("CORRECT");
  			ansMessage.innerHTML="CORRECT";
  			op1.disabled=true;
  			op2.disabled=true;
  			op3.disabled=true;
  			op4.disabled=true;

  			if(index==9){
		 		submit.classList.remove("hide");
		 		next.disabled=true;
		 		prev.disabled=true;
 			}
  			
  		});
  			
  	}
  		else{
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
				currentQues.answered=true;
				currentQues.check="WRONG";
				currentQues.scores=0;
				next.classList.remove("hide");
				prev.classList.remove("hide");
				quiz.style.background="#ef5350";
				body.style.background="#d50000";
				ansMessage.style.color="black";
	  			count++;
	  			answers.push("WRONG");
	  			ansMessage.innerHTML="WRONG. Correct answer is "+currentQues.ans;
	  			
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
	  			
	  			if(index==9){
					submit.classList.remove("hide");
					next.disabled=true;
					prev.disabled=true;
	 			}

  			});
  		
  		}
  		
	}
	if(index==9){
		submit.classList.remove("hide");

	}
  	
  	clickNext();
  		
}

function prevClickAns(){
	currentQues=shuffledQues[prevIndex];
	
	document.getElementById("ans").classList.remove("hide");
	for(var i=0;i<4;i++){
		
  		var list = document.getElementsByClassName("options")[0];
  		if(list.getElementsByClassName(i+1)[0].className==currentQues.answer){
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			
	  			currentQues.answered=true;
				currentQues.check="CORRECT";
				currentQues.scores=1;
				next.classList.remove("hide");
				prev.classList.remove("hide");
				quiz.style.background="#76ff03";
				body.style.background="green";
				ansMessage.style.color="#76ff03";
	  			count++;
	  			answers.push("CORRECT");
	  			ansMessage.innerHTML="CORRECT";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		else{
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			

  				currentQues.answered=true;
  				currentQues.check="WRONG";
  				currentQues.scores=0;
  				next.classList.remove("hide");
  				prev.classList.remove("hide");
  				quiz.style.background="#ef5350";
  				body.style.background="#d50000";
  				ansMessage.style.color="black";
  				count++;
	  			answers.push("WRONG");
	  			ansMessage.innerHTML="WRONG. Correct answer is "+currentQues.ans;
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		
	}
	next.classList.remove("hide");
  		clickNext();
  		
}

//Function for next button
function clickNext(){

	
	next.addEventListener("click",reset);
	next.addEventListener("click",newQuestion);
}


function reset(){
	if(currentQues.check=="CORRECT"){
		document.getElementById("quesnav"+currentQues.number).classList.add("correct");
	}
	else if(currentQues.check=="WRONG"){
		document.getElementById("quesnav"+currentQues.number).classList.add("wrong");
	}
	
	quiz.style.background="white";
	body.style.backgroundImage='url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg")';
	body.style.backgroundSize='cover';
	prevCount=0;
	index++;
	ansMessage.innerHTML="";
	prev.classList.remove("hide");
	result.classList.remove("hide");
	op1.disabled=false;
	op2.disabled=false;
	op3.disabled=false;
	op4.disabled=false;


}


function prevReset(){
	
	prevCount--;
	
}

//Function for previous button
function clickPrev(){
	
	prevCount++;
	console.log("prevCount"+prevCount);
	console.log("index"+index);
	index1=index;
	for(var i=1;i<=prevCount;i++){
		prevIndex=index1-i;
	}
	index=prevIndex;
	prevReset();

}
var todaydate;
var todaytime;
var dispName=document.getElementById("dispName");
var dispScore=document.getElementById("dispScore");
var dispDate=document.getElementById("dispDate");
var dispTime=document.getElementById("dispTime");

//Function for submit button
function clickSubmit(){
	result.classList.remove("hide");
	document.getElementById("quiz").classList.add("hide");
	document.getElementById("restart").classList.remove("hide");
	ansMessage.innerHTML="";
	body.style.backgroundImage='url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg")';
	body.style.backgroundSize='cover';

	scoreContainer.classList.remove("hide");
	for(var i=0;i<10;i++){
		abc=shuffledQues[i];
		finalScore+=abc.scores;
	}

	result.innerHTML="Name: "+username.value+"<br> Your score is "+finalScore+"/10 <br> Correct Percentage:"+finalScore*10+"% <br> Number of correct questions= "+finalScore;
	submit.disabled=true;
	next.disabled=true;
	prev.disabled=true;
	var today= new Date();
	todaydate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	todaytime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	
	var scores = JSON.parse(localStorage.getItem("detailstored"));
	console.log(JSON.parse(localStorage.getItem("detailstored")));
	update();
	function update(){

		if(scores==null){
			var details={
				name:username.value,
				score:finalScore,
				date:todaydate,
				time:todaytime
			};

			localStorage.setItem("detailstored", JSON.stringify(details));
			scores = JSON.parse(localStorage.getItem("detailstored"));

			dispName.innerHTML="Name: "+scores.name;
			dispScore.innerHTML="Score: "+scores.score+"/10";
			dispDate.innerHTML="Date: "+scores.date;
			dispTime.innerHTML="Time: "+scores.time;

		}
		if((finalScore>=scores.score)){
			var details={
				name:username.value,
				score:finalScore,
				date:todaydate,
				time:todaytime
			};

			localStorage.setItem("detailstored", JSON.stringify(details));
			scores = JSON.parse(localStorage.getItem("detailstored"));

			dispName.innerHTML="Name: "+scores.name;
			dispScore.innerHTML="Score: "+scores.score+"/10";
			dispDate.innerHTML="Date: "+scores.date;
			dispTime.innerHTML="Time: "+scores.time;

		}

		if((finalScore<scores.score)){
			dispName.innerHTML="Name: "+scores.name;
			dispScore.innerHTML="Score: "+scores.score+"/10";
			dispDate.innerHTML="Date: "+scores.date;
			dispTime.innerHTML="Time: "+scores.time;

		}

	}

}
//window.localStorage.clear();

var navId;
 function navigation(navQuesIndex,navigationId){
 	
 	navId=navigationId;
 	navQuestion(navQuesIndex-1,navId);
 	
 }

 function navQuestion(index,navId){

	console.log(index);
	quesCount++;
	currentQues=shuffledQues[index];
	ques.innerHTML=currentQues.question;
	op1.innerHTML=currentQues.option1;
	op2.innerHTML=currentQues.option2;
	op3.innerHTML=currentQues.option3;
	op4.innerHTML=currentQues.option4;
	

	if(currentQues.answered){
		
		if(currentQues.check=="CORRECT"){
			ansMessage.innerHTML="CORRECT"
			quiz.style.background="#76ff03";
  			body.style.background="green";
  			ansMessage.style.color="#76ff03";
  			document.getElementById(navId).style.background="#76ff03";
  			
		}
		else{
			ansMessage.innerHTML="WRONG. Correct answer is "+currentQues.ans;
			quiz.style.background="#ef5350";
  			body.style.background="#d50000";
  			ansMessage.style.color="black";
  			document.getElementById(navId).style.background="#ef5350";

		}
	}
	else{
  		quiz.style.background="white";
		body.style.backgroundImage='url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg")';
  		body.style.backgroundSize='cover';
		ansMessage.innerHTML="";
		op1.disabled=false;
		op2.disabled=false;
		op3.disabled=false;
		op4.disabled=false;
  	}
  	
  	currentQues=shuffledQues[index];
  	if(currentQues.number==10){
  		submit.classList.remove("hide");
  	}
	
	document.getElementById("ans").classList.remove("hide");
	for(var i=0;i<4;i++){
		
  		var list = document.getElementsByClassName("options")[0];
  		if(list.getElementsByClassName(i+1)[0].className==currentQues.answer){
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			
	  			currentQues.answered=true;
				currentQues.check="CORRECT";
				currentQues.scores=1;
				next.classList.remove("hide");
				prev.classList.remove("hide");
				quiz.style.background="#76ff03";
				body.style.background="green";
				ansMessage.style.color="#76ff03";
	  			count++;
	  			answers.push("CORRECT");
	  			ansMessage.innerHTML="CORRECT";
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		else{
  			list.getElementsByClassName(i+1)[0].addEventListener("click",function(){
  			

  				currentQues.answered=true;
  				currentQues.check="WRONG";
  				currentQues.scores=0;
  				next.classList.remove("hide");
  				prev.classList.remove("hide");
  				quiz.style.background="#ef5350";
  				body.style.background="#d50000";
  				ansMessage.style.color="black";
  				count++;
	  			answers.push("WRONG");
	  			ansMessage.innerHTML="WRONG. Correct answer is "+currentQues.ans;
	  			op1.disabled=true;
	  			op2.disabled=true;
	  			op3.disabled=true;
	  			op4.disabled=true;
  			});
  		}
  		
	}
	

	next.classList.remove("hide");
  		clickNext();

}

function navReset(){
	if(currentQues.check=="CORRECT"){
		document.getElementById("quesnav"+currentQues.number).classList.add("correct");
	}
	else if(currentQues.check=="WRONG"){
		document.getElementById("quesnav"+currentQues.number).classList.add("wrong");
	}

}
var interval;
function countDown(){

	var count = 300;
	interval = setInterval(function(){
	  document.getElementById('count').innerHTML=count;
	  count--;
	  if (count < -1){
	    clearInterval(interval);
	    document.getElementById('count').innerHTML='Done';
	    clickSubmit();
	    alert("You're out of time!");
	  }
	}, 1000);
}
function myStop() {
  clearInterval(interval);
}

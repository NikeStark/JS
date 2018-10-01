//Переменные
var one = 'You ';
var two = 'needta ';
var three = 'act ';
var four = 'Look on this';
alert(four);
console.log(one+two+three);

/*var bool = true;
console.log(bool);*/

/*var name = prompt ("How do you name?");
alert("My name is "+ name);
var age = prompt ("How old are you?");
alert(age+" years old");*/

var firstNum = 12;
var secondNum = 24;
firstNum -= 12;
secondNum++;
document.write(Math.PI+"<br>");
document.write(Math.round (2.49)+"<br>");
document.write("My result: ", +firstNum+secondNum+"<br>");

//Массивы
var colors = ["Red","Blue","Green","Pink"];
colors[4] =  "Yellow";
document.write(colors[4]+"<br>");

var Colors = new Array ("Red","Blue","Green");
Colors[3] = "Orange";
Colors.push("White");
console.log(Colors[4]);

//Циклы

var i = 100
do{
console.log(i);
}while(i<99);

/*var i = 1;
while(i<=100){
console.log(i);
i+=2;
}*/

/*for (var i = 100; i >= 1; i-=10){
console.log(i);
}*/

var different_colors = new Array ("Red","Green","Blue");
	for (var i = 0; i < different_colors.length;i++)
		console.log(different_colors[i]+" color");
	
//Операторы условий
if(1 != 1){
	document.write("It's truth"+"<br>");
}else if (1==1){
	document.write("It's good"+"<br>");
} else {
	document.write("It's false"+"<br>");
}

var a = 10;
var b = 20;
if(a>b){
document.write(a + ">" + b + "<br>");
}else if(a == b){
	document.write(a + "==" + b + "<br>");
}else{
	document.write(a + "<" + b + "<br>");
}

var bool = false;
if((!bool || a != 10) && b == 20){
	document.write (bool + " is false"+ "<br>")
}

var res = 5;
switch(res){
	case 1:
	alert("Res from ome case");
	break;
	case 2:
	alert("Res from two case");
	break;
	case 3:
	alert("Res from three case");
	break;
	default:
	alert("Res is unknown")
}

// Функции
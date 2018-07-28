
// function fizzBuzz(){
// 	for(var i=1;i<=20;i++){
// 		if(i%5 === 0 && i%3 === 0){
// 			console.log("FizzBuzz ");
// 		} else if(i%3 === 0){
// 			console.log("Fizz ");
// 		} else if(i%5 === 0){
// 			console.log("Buzz ");
// 		} else {
// 			console.log(i);
// 		}
// 	}
// }


function fizzBuzz(){
    var output="";
	for(var i=1;i<=20;i++){
      
		if(i%5 === 0 && i%3 === 0){
            output += "FizzBuzz, ";
            console.log("FizzBuzz ");
		} else if(i%3 === 0){
            output += "Fizz, ";
            console.log("Fizz ");
		} else if(i%5 === 0){
            output += "Buzz, ";
            console.log("Buzz ");
		} else {
            output += i + ", ";
            console.log(i);
		}
    }
    return output;
}


var para = document.createElement("p");
var node = document.createTextNode(fizzBuzz());
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);

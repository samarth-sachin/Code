//what is a callback function in javascript
setTimeout(function (){
 console.log("timer");
},5000);
function x(y)
{ console.log("x");

}
x(function y()
{
 console.log("y");
}
);
// javascript is a synchronous and single threaded language
// Blocking the main thread
//power of callbacks
//Deep about event listeners
//closure demo with event listner 
//scope demo with event listerner
//Garbage collection & remove Element listner

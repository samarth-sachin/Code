// // console.log(a);

// function b()
// { var a=6;
//     function c()
//     {
//         console.log(a);
//         console.log(b);
//     }

// }
var b=10;
function b() {
    var a = 6; // 'a' is part of the lexical environment of 'b'
    function c() {
        console.log(a); // 'a' is accessed from the parent function 'b'
        console.log(b); // 'b' refers to the global scope
    }
}
var b = 10; // Redefines 'b' globally

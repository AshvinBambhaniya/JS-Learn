// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
function z() {
    var b = 45
    x()
    function x() {
        var a = 7
        function y() {
            console.log(a, b);
        }
        y()
        a = 10
        y()
        b= 100
    }
    return x
}


var d = z()
console.log(d);

d()
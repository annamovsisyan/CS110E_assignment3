/*function reverseNum(num) {
    return (
        parseFloat (
            (((num.toString()).split("")).reverse()).join("")
     ) * Math.sign(num)

    )
}
num = 133
console.log (reverseNum(num))*/

function f(x) {
    let res = 0;
    while (x !== 0) {
        res = res * 10 + x % 10;
        x = (x - x % 10) / 10;
    }
    return res;
}

console.log(f(123));
// 3
function reverseNum(x) {
    let res = 0;
    while (x !== 0) {
        res = res * 10 + x % 10;
        x = (x - x % 10) / 10;
    }
    return res;
}

// 4

function isPalindrome(x) {
    return reverseNum(x) === x;
}
console.log("The number is a polindrome", isPalindrome(389)) 
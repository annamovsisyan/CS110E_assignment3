function inverseBinary(num) {
    let result = []
    for (let i = 0; i < num.length; i++) {
        if (+num[i] === 1) {
            result[i] = 0;
        } else {
            result[i] = 1;
        }
    } return result.join("");
    
}
console.log(inverseBinary("10"))
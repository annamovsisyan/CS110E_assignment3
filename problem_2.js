
     function isPrime(x) {
        let sqrtNum = Math.floor(Math.sqrt(x));
   
        if ( x <= 1) {
           return false
        }
        for ( let i = 2; i <= sqrtNum; i++ ) {
            if( x % i === 0) {
                return false;
            }
       
        }
        return true
    }
    function primeBetween(x, y) {
    let res = [];
    for ( let i = x; i <= y; i++) {
        if( isPrime(i)) {
            res.push(i);
        }
    }
    return res;
}
console.log(primeBetween(3, 31))
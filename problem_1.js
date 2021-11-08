
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
         return true // 2-SQRTnum chkar tiv uremn prime-a
     }
     console.log( isPrime(1))
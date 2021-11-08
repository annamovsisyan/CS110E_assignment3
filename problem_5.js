function sum(x, y) {
    let a = [], b = []; // a = x.split(""), b = y.split("");

    for (let i = 0; i < x.length; i++) {
        a[i] = +x[i];
    }
    for (let i = 0; i < y.length; i++) {
        b[i] = +y[i];
    }
    let h = Math.abs(a.length - b.length);

    if (h !== 0) {
        let arr;
        if (a.length > b.length) {
            arr = b;
        } else {
            arr = a;
        }

        for (let i = 0; i < h; i++) {
            arr.unshift(0);
        }
    }

    let carry = 0, res = [];
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = a[i] + b[i];

        if (carry === 1) {
            sum += carry;
            carry = 0;
        }

        if (sum === 2) {
            carry = 1;
            sum = 0;
        }

        res[i] = sum;
    }
    if (carry) {
        res.unshift(carry);
    }

    return res.join('');
}

console.log(sum('10', '1'))// 10000
function sum(n1) {
    return function (n2) {
        return n1 + n2;
    }
}

console.log(sum(3)(19));
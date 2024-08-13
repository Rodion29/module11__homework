function isPrime(n) {
    let prime = "Number is prime";
    let complex = "Number isn't prime";

    if (n <= 1 && n > 1000) return console.log("You have selected a number from the wrong range");
    if (n == 2) return prime;

    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {return complex}
    }

    return prime;
}
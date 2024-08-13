let array = [0, 1, 2, 3, 4, 5, 6, 7, 8 ,'q', 'v', null]

function countEvenOdd(arr) {
    let even = 0
    let odd = 0
    let other = 0

    for(let i = 0; i < arr.length; i++) {
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            other++
        } else {
            if ((arr[i]) % 2 === 0) {
                even++
            } else {
                odd++
            }
        }
    }

    return [even, odd, other]
}

let result = countEvenOdd(array);

console.log("Even is " + result[0])
console.log("Odd is " + result[1])
console.log("Other is " + result[2])
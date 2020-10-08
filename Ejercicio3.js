let values = [4, 5, 41, 33, 2, 7, 30, 13];

let min = values.reduce(function findMinimum(p, c) {
    return Math.min(p, c);

})

console.log(min);
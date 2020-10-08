let values = [4, 5, 41, 33, 2, 7, 30, 13];
let numero = 8
let minimo = values.reduce(function findMinimum(r, x) {
    return Math.min(r, x);

})


let checking = values.reduce(function findGreatherThan() {
    if (minimo > numero) {
        return true
    }
    else {
        return false
    }
})
console.log(checking);
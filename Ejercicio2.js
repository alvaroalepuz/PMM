const values = [5, 7, 63, 4, 8, 0, 9, 3];

function average (values) {

    let suma = values.reduce((previous, current) => current += previous);
    let avg = suma / values.length;
    return avg;
}

console.log(average(values));
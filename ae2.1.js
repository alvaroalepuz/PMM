const array = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vanessa", 10];

const filtro = array.filter(arra => arra.length > 2);

console.log(filtro);

const filtro3 = array.filter(function (number) {
    return number % 2 == 0;
});

console.log(filtro3);
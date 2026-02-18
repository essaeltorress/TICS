let números = [1,2,3,4,5,10,20,30,40,50];
let pares = [];
let impares = [];

for (let i = 0; i <números.length; i++) {
    console.log(números[i]);
    if (números[i] % 2 === 0) {
        pares.push(números[i]);
    } else {
        impares.push(números[i]);
    }
}

console.log(pares);
console.log(impares);
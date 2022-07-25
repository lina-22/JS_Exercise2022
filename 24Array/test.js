const numbers = [45, 4, 9, 16, 25];

function myFunction(total, value, index, array){
    return total + value;

}

const newNumbers = numbers.reduce(myFunction);
console.log(newNumbers);
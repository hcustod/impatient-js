sum = (x,y,z) => {
    return x+y+z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));
console.log(sum.apply(null,numbers));


const array = [2,4,6,8,10];
const anotha_array = [...array];

console.log(anotha_array);



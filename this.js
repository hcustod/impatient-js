const person = {
    first: "Henrique",
    last: "Custodio",
    id: 49914161,
    fullname: function() { 
        return this.first + " " + this.last;
    }
};

console.log(person.first);
console.log(person.fullname.call(person));


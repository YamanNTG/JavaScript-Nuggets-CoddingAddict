// MAP Method

const people = [
    {
       name: 'bob',
       age: 20,
       position: 'developer' 
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer' 
     },
     {
        name: 'susy',
        age: 30,
        position: 'the boss' 
     },
     {
        name: 'james',
        age: 26,
        position: 'intern' 
     },

];

const getAges = (person) => {
    return person.age * 2;
}

const ages = people.map(getAges);
//console.log(ages);

const newPeople = people.map((item)=>{
    return {
        firstName:item.name.toLocaleUpperCase(),
        oldAge:item.age + 20
    }
})
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');
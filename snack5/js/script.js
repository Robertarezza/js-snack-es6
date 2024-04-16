
const person = [
    {
        nome: "pippo",
        lastname: "verdi",
        age: 23,
    },
    {
        nome: "franco",
        lastname: "russo",
        age: 17,
    },
    {
        nome: "peppe",
        lastname: "blu",
        age: 25,
    },
    {
        nome: "giorgio",
        lastname: "manfredi",
        age: 18,
    },
]

let newArray = []

person.forEach((curPerson) => {

    if (curPerson.age >= 18) {
        newArray += `${curPerson.nome} ${curPerson.lastname} ha ${curPerson.age} anni e può guidare,`
    }else {
        newArray += `${curPerson.nome} ${curPerson.lastname} ha ${curPerson.age} anni e non può guidare,`
    }

})
console.log(newArray);
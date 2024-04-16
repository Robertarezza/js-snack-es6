const automobili = [
    {
        marca: "Toyota",
        modello: "Yaris",
        alimentazione: "ibrida"
    },
    {
        marca: "Volkswagen",
        modello: "Golf",
        alimentazione: "benzina"
    },
    {
        marca: "BMW",
        modello: "i3",
        alimentazione: "elettrico"
    },
    {
        marca: "Fiat",
        modello: "Panda",
        alimentazione: "metano"
    },
    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "diesel"
    },
    {
        marca: "Tesla",
        modello: "Model S",
        alimentazione: "elettrico"
    },
    
];

let benzina = [];
let diesel = [];
let gplElett = [];

// benzina = automobili.filter((curAuto) => {
//     if(curAuto.alimentazione === "benzina") {
//         return true
//     }else {
//         return false
//     }
   

// })
// console.log(benzina);

// diesel = automobili.filter((curAuto) => {
//     if(curAuto.alimentazione === "diesel") {
//         return true
//     }else {
//         return false
//     }
// })

// console.log(diesel);

// gplElett = automobili.filter((curAuto) => {
//     if(curAuto.alimentazione !== "benzina" && curAuto.alimentazione !== "diesel") {
//         return true
//     }else {
//         return false
//     }
// })

// console.log(gplElett);

automobili.forEach((curAuto) => {
    if (curAuto.alimentazione === "benzina") {
        benzina.push(curAuto)
    }else if (curAuto.alimentazione === "diesel") {
        diesel.push(curAuto) 
    }else {
        gplElett.push(curAuto)
    }
})

console.log(gplElett, benzina, diesel);
//test
//alert("ciao")


//arrey di oggetti con bici da corsa e le relative proprietà
const bikeRacing = [
    {
        name : "Bianchi",
        weight: 9,
    },
     {
        name : "Tarma",
        weight: 8.5,
   },
   {
        name : "Trek",
        weight: 5.2,
    },
    {
       name : "Elopds",
       weight: 7.2,
    }
]

//trova bici da corsa con peso minore
let lightBike = bikeRacing[0].weight
let nomeBike = bikeRacing[0].name


bikeRacing.forEach((element) => {
const {weight, name} = element;
//console.log(weight, name);

    const burBikename = element.name 
    const curBike = element.weight
   // console.log(curBike);
    
    if (curBike < lightBike) {
        lightBike = curBike
        nomeBike = burBikename
    }

})
console.log(lightBike, nomeBike);

document.getElementById("result").innerText = `La bici più leggera è: ${nomeBike} ${lightBike}`;
//test
//alert("ciao")

//Array di squadra di calcio

const soccerTeam = [
    {
        nome: "Juventus", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
    {
        nome: "Milan", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
    {
        nome: "Inter", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
    {
        nome: "Verona", 
        puntiFatti: 0, 
        falliSubiti: 0
    },
]

// Generazione di numeri casuali per punti fatti e falli subiti per ogni squadra
soccerTeam.forEach(team => {
    team.puntiFatti = generaNumeroCasuale(0, 100);
    team.falliSubiti = generaNumeroCasuale(0, 50);
    //let newSoccerTeam = [team.nome, team.falliSubiti];

    //console.log(newSoccerTeam);
    // let {nome, falliSubiti} = team
    // console.log(nome, falliSubiti, team);
   
});



//let newSoccerTeam = soccerTeam.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));
//console.log(newSoccerTeam,);


const newTeams = soccerTeam.map((team) => {
    const {nome, falliSubiti} = team
    return {
        nome,
        falliSubiti
    }
    
})

console.log(newTeams);
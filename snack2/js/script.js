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
});

console.log(soccerTeam);
const db = require('../server/db.json')
let id = 4

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A lifetime friend shall soon be made.", "A lifetime of happiness lies ahead of you.", "Change is happening in your life, so go with the flow!", "Good news will come to you by mail.", "You will travel far and wide, both pleasure and business."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getToDoList: (req, res) => {
        let toDoList = db;
        res.status(200).send(toDoList)
    },

    addToDoList: (req, res) => {
        
        let newToDo = {...req.body,id:id}
        db.push(newToDo)

        res.status(200).send(db);
        id++;
    }


}
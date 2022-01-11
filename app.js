const express = require("express");
const server = express();

const users = [
    {id: 1010, name: "José Cândido", email: "jose@mail.com"}, 
    {id: 1020, name: "Carla de Souza", email: "carlass@mail.com"},
    {id: 1030, name: "Maria Mendonça", email: "mariamm@mail.com"},
    {id: 1040, name: "Marcos do Nascimento", email: "marcosnas@mail.com"},
    {id: 1050, name: "Carlos Brito", email: "carlosbri@mail.com"}, 
    {id: 1060, name: "Martha Martinica", email: "mamartinica@mail.com"},
    {id: 1070, name: "Maria Gomes", email: "magomex@mail.com"},
    {id: 1080, name: "Xuxa Meneguel", email: "paquita@mail.com"},
    {id: 1090, name: "Igor Souza", email: "souzai@mail.com"},
    {id: 1100, name: "Gabriel Matos", email: "gabriel-matos@mail.com"},
    {id: 1110, name: "Gabriela Luz", email: "luzluz@mail.com"},
    {id: 1120, name: "Luciana Schimidt", email: "peixinho@mail.com"}, 
    {id: 1130, name: "Bruna Martinica", email: "bruninha12@mail.com"},
    {id: 1140, name: "Gabriel Penteado", email: "pente@mail.com"},
    {id: 1150, name: "Gustavo Rangel", email: "gusrangel@mail.com"}
];

server.use(express.static("public"));

server.get("/users", function(req,res) {
    console.log('query completa', req.query);
    console.log('id', req.query.id);
    console.log('name', req.query.name);
    console.log('email', req.query.email);

    let userId, userName, userEmail;

    if (req.query.id) {
        userId = users.filter(item => item.id.toString().includes(req.query.id));
    } else {
        userId = users;
    }

    if (req.query.name) {
        userName = userId.filter(item => item.name.toLowerCase().includes(req.query.name.toLowerCase()));
    } else {
        userName = userId;
    }

    if (req.query.email) {
        userEmail = userName.filter(item => item.email.toLowerCase().includes(req.query.email.toLowerCase()));
    } else userEmail = userName;

    res.json(userEmail);
})

server.listen(3000, (erro) => {
    if (erro) {
      console.log('Nope');
    } else {
      console.log('Yeap, serving at port 3000');
    }
  });

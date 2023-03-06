const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
server.use(jsonServer.bodyParser)
server.use(middlewares)


const tokenMesero = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmkubWVzZXJvQGJ1cmdlci5xdWVlbiIsImlhdCI6MTY3ODA3MjkzNywiZXhwIjoxNjc4MDc2NTM3LCJzdWIiOiJIWlh1QUNtIn0.TpQBcf8V2SUdrDKOJH-p8ATM2FZAQ6BY_7Bhh9X_TCY";

server.use((req, res, next) => {
    // console.log(req.headers);
  if(req.method === "POST" && req.path === "/login") {
   next();
  } else if(req.headers.authorization === `Bearer ${tokenMesero}` 
    ) {
   next()
  } else {
   res.sendStatus(401)
  }
})

server.post('/login', (req, res) => {
  const users = [
    {
      email: "dani.mesero@burger.queen",
      password: "$2a$10$Sd.g4OTgcCuOChz.oHvAhe5m.A0pZzEV7TEKwHdHCoUN9xTLcx7W."
    },
 
  ];
  
  const userEmail = users.map(user => user.email);
  const userPassword = users.map(user => user.password);

    if (userEmail.includes(req.body.email) 
    && userPassword.includes(req.body.password)) {
      if (req.body.email === "dani.mesero@burger.queen"){
        res.jsonp({
          token: tokenMesero
        })
      } 
    } else {
        res.status(400).send('Bad Request')
    }    
})





// Para probar sí esta corriendo el servidor
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

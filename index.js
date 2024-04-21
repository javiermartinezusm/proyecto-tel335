const express = require('express')
const app = express()
let user = {"Chulopan": "hola1234"}
let canchas ={
    "c7x7" : {
        capacidad: 14,
        actual: 10,
    },
    "c5x5": {
        capacidad: 10,
        actual: 5,
    }
}

app.post('/register/', function(request, response) {
    user[request.query.user]=request.query.password
    console.log(user)
    response.send("Usted es lindo "+request.query.user)
});

app.get('/login/', function(request,response){
    if(request.query.user in user){
        if(user[request.query.user]==request.query.password){
            response.send("Bienvenido usuario "+request.query.user)
        } else{
            response.send("Usuario o contraseña incorrecto")
        }
    }
    else{
        response.send("Usuario o contraseña incorrecto")
    }
});

app.put("/", function(request,response){

});

app.get('/users', function (request, response) {
    response.send(user)
   })
app.get('/', function (request, response) {
    response.send('HOLA MUNDO DESDE API REST')
   })
app.listen(3001, function (){
 console.log('Server is running in port 3001')
})
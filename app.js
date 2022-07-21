const app = require('./app/config/server');
const port = 3000;

const home = require('./app/routes/index')(app);
const addRoom = require('./app/routes/add-room')(app);

app.listen(port,()=>{
    console.log(`Servidor no ar rodando na porta ${port}`)
})
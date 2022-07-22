const app = require('./app/config/server');
const port = 3000;

const home = require('./app/routes/index')(app);
const addRoom = require('./app/routes/add-room')(app);
const officingFeatures = require('./app/routes/officing-features')(app);
const apresentation = require('./app/routes/apresentation')(app);

app.listen(port,()=>{
    console.log(`Servidor no ar rodando na porta ${port}`)
})
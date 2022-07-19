const app = require('./app/config/server')
const port = 3000

const home = require('./app/routes/index')(app)


app.listen(port,()=>{
    console.log(`Servidor no ar rodando na porta ${port}`)
})
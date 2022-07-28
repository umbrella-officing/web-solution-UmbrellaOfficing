const app = require('./app/config/server');
const port = 3000;

const home = require('./app/routes/index')(app);

/* Requisições telas: Minha conta */
const myProfilePublic = require('./app/routes/my-account/my-profile-public')(app);
const myProfile = require('./app/routes/my-account/my-profile')(app);
const myPersonalDate = require('./app/routes/my-account/personal-date')(app);
const myReservations = require('./app/routes/my-account/reservations')(app);
const myNotifications = require('./app/routes/my-account/notifications')(app);
const myFavorits = require('./app/routes/my-account/favorites')(app);

/* Requisições tela: Torne-se um anunciante! */
const myAdvertiser = require('./app/routes/become-advertiser')(app);

/* Requisições telas: Central do proprietário */
const myAds = require('./app/routes/owners-center/my-ads')(app);
const myCalendar = require('./app/routes/owners-center/calendar')(app);

/* Requisições telas: Central do proprietário - Anunciar*/
const addRoom = require('./app/routes/add-room')(app);
const officingFeatures = require('./app/routes/officing-features')(app);
const apresentation = require('./app/routes/apresentation')(app);
const photos = require('./app/routes/photos')(app);

app.listen(port,()=>{
    console.log(`Servidor no ar rodando na porta ${port}`)
})
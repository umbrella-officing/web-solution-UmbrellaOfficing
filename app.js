const app = require('./app/config/server');
const port = 3000;

const home = require('./app/routes/index')(app);

/* Requisições telas: Minha conta */
const myProfilePublic = require('./app/routes/my-account/my-profile-public')(app);
const myProfile = require('./app/routes/my-account/my-profile')(app);
const myPersonalDate = require('./app/routes/my-account/personal-date')(app);
const myReservations = require('./app/routes/my-account/reservations')(app);
const notifications = require('./app/routes/my-account/notifications')(app);
const myFavorits = require('./app/routes/my-account/favorites')(app);
const myAds = require('./app/routes/my-account/my-ads')(app);
const myCalendar = require('./app/routes/my-account/calendar')(app);
const editAd = require('./app/routes/my-account/edit-ad')(app);
const bookingRequest = require('./app/routes/my-account/booking-requests')(app);

/* Requisições tela: Torne-se um anunciante! */
const myAdvertiser = require('./app/routes/become-advertiser')(app);
    
/* Requisições telas: Anunciar*/
const environment = require('./app/routes/register-space/type-of-environment')(app);
const adaptableCategories = require('./app/routes/register-space/categories/adaptables/adaptables-categories')(app);
const addRoom = require('./app/routes/register-space/add-room')(app);
const officingFeatures = require('./app/routes/register-space/officing-features')(app);
const apresentation = require('./app/routes/register-space/apresentation')(app);
const photos = require('./app/routes/register-space/photos')(app);
const finalization = require('./app/routes/register-space/finalization')(app);

/*Requisições das subcategorias*/
const subApartment = require('./app/routes/register-space/categories/adaptables/subcategories/apartment-subcategory')(app);

app.listen(port,()=>{
    console.log(`Servidor no ar rodando na porta ${port}`)
});
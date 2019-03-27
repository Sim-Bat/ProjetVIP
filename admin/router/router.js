let HomeController = require('./../controllers/HomeController');
let ConnexionController =  require('./../controllers/ConnexionController');
let VipsController =  require('./../controllers/VipsController');
let PhotosController =  require('./../controllers/PhotosController');

// Routes
module.exports = function(app){

// Main Routes
  app.get('/', HomeController.Index);
  app.get('/Home', HomeController.Index);

//Connexion
  app.post('/Connexion', ConnexionController.Connexion);
  app.get('/PageConnexion', ConnexionController.testConnexion);
  app.get('/Deconnexion', ConnexionController.Deconnexion);

//Vips
  app.get('/Administration/Vips', ConnexionController.testConnexion, VipsController.vips);

    //Ajouter
    app.get('/Administration/Vips/AjouterVipTest', ConnexionController.testConnexion, VipsController.AjouterVipTest);
    app.post('/Administration/Vips/AjouterVip', ConnexionController.testConnexion, VipsController.AjouterVip);

    //Modifier
    app.get('/Administration/Vips/ModifierVipTest', ConnexionController.testConnexion, VipsController.ModifierVipTest);
    app.post('/Administration/Vips/ModifierVip', ConnexionController.testConnexion, VipsController.ModifierVip);

    //Supprimer
    app.get('/Administration/Vips/SupprimerVipTest', ConnexionController.testConnexion, VipsController.SupprimerVipTest);
    app.post('/Administration/Vips/SupprimerVip',  ConnexionController.testConnexion, VipsController.SupprimerVip);

//Photos
  app.get('/Administration/Photos', ConnexionController.testConnexion, PhotosController.photos);

    //Ajouter
    app.get('/Administration/Photos/AjouterPhotoTest', ConnexionController.testConnexion, PhotosController.AjouterPhotoTest);
    app.post('/Administration/Photos/AjouterPhoto', ConnexionController.testConnexion, PhotosController.AjouterPhoto);

    //Supprimer
    app.get('/Administration/Photos/SupprimerPhotoTest', ConnexionController.testConnexion, PhotosController.SupprimerPhotoTest);
    app.post('/Administration/Photos/SupprimerPhoto', ConnexionController.testConnexion, PhotosController.SupprimerPhoto);
    app.post('/Administration/Photos/SupprimerPhoto2/:vipNum', ConnexionController.testConnexion, PhotosController.SupprimerPhoto2);

// tout le reste
  app.get('*', HomeController.NotFound);
  app.post('*', HomeController.NotFound);

};

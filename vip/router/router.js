let HomeController = require('./../controllers/HomeController');
let VipController = require('./../controllers/VipController');
let ArticleController = require('./../controllers/ArticleController');
let AlbumController = require('./../controllers/AlbumController');

// Routes
module.exports = function(app){

// Main Routes
  app.get('/', HomeController.Index);
  app.get('/accueil', HomeController.Index);

// VIP
  app.get('/repertoire', VipController.Repertoire);
  app.get('/repertoire/:lettre', VipController.DetailLettre);
  app.get('/repertoire/:lettre/:numStar', VipController.DetailsStar);

// Articles
  app.get('/articles', ArticleController.Articles);
  app.get('/articles/:numStar', ArticleController.ArticlesVip);

// Albums
  app.get('/album', AlbumController.ListerAlbum);
  app.get('/album/:numStar', AlbumController.ListerAlbum);

// tout le reste
  app.get('*', HomeController.NotFound);
  app.post('*', HomeController.NotFound);

};

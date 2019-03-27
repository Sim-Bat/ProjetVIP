let model = require("../models/vip.js");
let async = require("async");

// ///////////////////////// R E P E R T O I R E    D E S     S T A R S

  module.exports.Repertoire = 	function(request, response){
   response.title = 'Répertoire des stars';
   model.repStars(function(err, result){  // appel le module test qui exécute la requete SQL
       if (err) {
           console.log(err);
           return;
       }
      response.lettres = result;

      response.render('lettresVips', response); // appel la vue Handlebars qui va afficher le résultat
    } );
  }

  module.exports.DetailLettre = 	function(request, response){
   let lettre = request.params.lettre;
   response.title = 'Liste des stars dont le nom commence par ' + lettre;
   async.parallel ([
     function (callback) {
       model.repStars(function(err, result) {callback(null,result) });
     },
     function (callback) {
       model.listVips(lettre, function(err, result) {callback(null,result) });
     },
   ],
     function(err,result) {
       if (err) {
           console.log(err);
           return;
       }
       response.lettres = result[0];
       response.stars = result[1];

       response.render('repertoireVips', response); // appel la vue Handlebars qui va afficher le résultat
      }
     );
   };

   module.exports.DetailsStar = 	function(request, response){
    let vipNum = request.params.numStar;
    response.title = 'Vip';
    async.parallel ([
      function (callback) {
        model.repStars(function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.infosVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.liaisonsVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.mariagesVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.photosVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.realisateurVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.acteurVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.chanteurVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.mannequinVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.couturierVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.joueVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.filmsVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.albumsVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.defiledansVip(vipNum, function(err, result) {callback(null,result) });
      },
      function (callback) {
        model.defilesVip(vipNum, function(err, result) {callback(null,result) });
      },
    ],
      function(err,result) {
        if (err) {
            console.log(err);
            return;
        }
        response.lettres = result[0];
        response.infos = result[1][0];
        response.liaisons = result[2];
        response.mariages = result[3];
        response.photos = result[4];
        response.realisateur = result[5];
        response.acteur = result[6];
        response.chanteur = result[7];
        response.mannequin = result[8];
        response.couturier = result[9];
        response.joue = result[10];
        response.films = result[11];
        response.albums = result[12];
        response.defiledans = result[13];
        response.defiles = result[14];

        response.render('detailVip', response); // appel la vue Handlebars qui va afficher le résultat
      }
    );
  };

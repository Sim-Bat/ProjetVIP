let model = require("../models/vip.js");
let async = require('async');
let moment = require('moment');

////////////////////////////////////////////////////////////////////////////////

module.exports.ListerAlbum =function(request, response){
  response.title = 'Album des stars';
  let vipNum = request.params.numStar;

  async.parallel ([
    function (callback){
      model.vipPhotosPrincipales(function(err, result){callback(null,result)});
    },
    function(callback){
      model.vipCommentairesPhotosPrincipales(vipNum,function(err, result){callback(null,result)});
    }
  ],
    function(err,result){

      if (err) {
        console.log(err);
        return;
      }
      response.photos = result[0];
      response.commentaires = result[1];

      response.render('listerAlbum', response);
    }
  );
}

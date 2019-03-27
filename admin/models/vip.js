let db = require('../configDb');

////////////////////CONNEXION////////////////////////

module.exports.getAuthentification = function(callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM PARAMETRES";
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}


//////////////////////VIPS//////////////////////////

module.exports.nationalites = function(callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM NATIONALITE";
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.vips = function(callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM VIP ORDER BY VIP_NOM";
      // console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
}

module.exports.InsererVip = function(vip, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "INSERT INTO VIP SET NATIONALITE_NUMERO = " + vip.NATIONALITE_NUMERO + ", VIP_NOM = '" + vip.VIP_NOM + "', VIP_PRENOM = '" +  vip.VIP_PRENOM;
          sql = sql + "', VIP_SEXE = '" + vip.VIP_SEXE + "', VIP_NAISSANCE = '" + vip.VIP_NAISSANCE + "', VIP_TEXTE = '" + vip.VIP_TEXTE + "', VIP_DATE_INSERTION = NOW()";
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.InsererPhotoVip = function(photoVip, vipNum, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "INSERT INTO PHOTO SET PHOTO_NUMERO = '1', VIP_NUMERO = " + vipNum + ", PHOTO_SUJET = '"+ photoVip.PHOTO_SUJET;
          sql = sql + "', PHOTO_COMMENTAIRE = '" + photoVip.PHOTO_COMMENTAIRE + "', PHOTO_ADRESSE = '" + photoVip.PHOTO_ADRESSE + "'";
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}


module.exports.UpdateVip = function(vip, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "UPDATE VIP SET NATIONALITE_NUMERO = " + vip.NATIONALITE_NUMERO + ", VIP_NOM = '" + vip.VIP_NOM + "', VIP_PRENOM = '" +  vip.VIP_PRENOM;
          sql = sql + "', VIP_SEXE = '" + vip.VIP_SEXE + "', VIP_NAISSANCE = '" + vip.VIP_NAISSANCE + "', VIP_TEXTE = '" + vip.VIP_TEXTE;
          sql = sql + "' WHERE VIP_NUMERO = " + vip.VIP_NUMERO;
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.UpdatePhotoVip = function(photoVip, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "UPDATE PHOTO SET PHOTO_NUMERO = 1, VIP_NUMERO = " + photoVip.VIP_NUMERO + ", PHOTO_SUJET = '"+ photoVip.PHOTO_SUJET;
          sql = sql + "', PHOTO_COMMENTAIRE = '" + photoVip.PHOTO_COMMENTAIRE + "', PHOTO_ADRESSE = '" + photoVip.PHOTO_ADRESSE;
          sql = sql + "' WHERE VIP_NUMERO = " + photoVip.VIP_NUMERO;
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.DeleteVip = function(vipNum, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "DELETE FROM VIP WHERE VIP_NUMERO = " + vipNum;
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.DeletePhotoVip = function(vipNum, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "DELETE FROM PHOTO WHERE VIP_NUMERO = " + vipNum;
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}


////////////////////PHOTOS/////////////////////////

module.exports.photoNumero = function(vipNum, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT MAX(PHOTO_NUMERO) AS photoNum FROM PHOTO WHERE VIP_NUMERO = " + vipNum;
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.photosVip = function(vipNum, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT * FROM PHOTO WHERE VIP_NUMERO = " + vipNum + " AND PHOTO_NUMERO != 1";
      // console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
}

module.exports.InsererPhoto = function(photoNum, photoVip, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "INSERT INTO PHOTO SET PHOTO_NUMERO = " + photoNum + ", VIP_NUMERO = " + photoVip.VIP_NUMERO + ", PHOTO_SUJET = '"+ photoVip.PHOTO_SUJET;
          sql = sql + "', PHOTO_COMMENTAIRE = '" + photoVip.PHOTO_COMMENTAIRE + "', PHOTO_ADRESSE = '" + photoVip.PHOTO_ADRESSE + "'";
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.DeletePhoto = function(vipNum, photoNum, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
            let sql = "DELETE FROM PHOTO WHERE VIP_NUMERO = " + vipNum + " AND PHOTO_NUMERO = " + photoNum;
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

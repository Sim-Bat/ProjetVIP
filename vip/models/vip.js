let db = require('../configDb');


////////////////////VIP////////////////////////

module.exports.repStars = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT substring(VIP_NOM,1,1) AS letNom FROM vip GROUP BY letNom ORDER BY 1";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.listVips = function(lettre, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, vip.vip_numero AS numStar, \'"+ lettre +"\' AS letNom FROM VIP, PHOTO ";
            sql = sql + "WHERE vip.vip_numero = photo.vip_numero AND photo_numero = 1 AND substring(VIP_NOM,1,1) = \'" + lettre + "\' ORDER BY 1";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.infosVip = function(numStar, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
          let sql = "SELECT * FROM vip, nationalite ";
          sql = sql + "WHERE nationalite.nationalite_numero = vip.nationalite_numero AND vip.vip_numero = " + numStar;
          // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
        }
    });
};

module.exports.liaisonsVip = function(numStar, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT substring(VIP_NOM,1,1) AS letNom, v.VIP_NUMERO, VIP_NOM, VIP_PRENOM, DATE_EVENEMENT, LIAISON_MOTIFFIN, p.PHOTO_ADRESSE,";
            sql = sql + " v.VIP_TEXTE FROM liaison l, vip v, photo p";
            sql = sql + " WHERE v.vip_numero = l.vip_vip_numero AND v.vip_numero = p.vip_numero AND p.PHOTO_NUMERO = 1 AND l.vip_numero = " + numStar ;
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.mariagesVip = function(numStar, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT substring(VIP_NOM,1,1) AS letNom, v.VIP_NUMERO, VIP_NOM, VIP_PRENOM, VIP_TEXTE,"
            sql = sql + " DATE_EVENEMENT, MARIAGE_LIEU, MARIAGE_FIN, MARIAGE_MOTIFFIN, p.PHOTO_ADRESSE FROM mariage m, vip v, photo p"
            sql = sql + " WHERE v.vip_numero = m.vip_vip_numero AND v.vip_numero = p.vip_numero AND p.PHOTO_NUMERO = 1 AND m.vip_numero = " + numStar;
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.photosVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT v.VIP_NUMERO, VIP_PRENOM, VIP_NOM, PHOTO_NUMERO, PHOTO_SUJET, PHOTO_ADRESSE, PHOTO_COMMENTAIRE FROM PHOTO p, VIP v";
          sql = sql + " WHERE p.VIP_NUMERO = v.VIP_NUMERO AND v.vip_numero = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

////////////////////METIERS////////////////////////

module.exports.realisateurVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM realisateur WHERE vip_numero = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.acteurVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM acteur WHERE vip_numero = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.chanteurVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM chanteur WHERE vip_numero = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.mannequinVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM mannequin WHERE vip_numero = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.couturierVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM couturier WHERE vip_numero = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.joueVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
        let sql = "SELECT substring(v.VIP_NOM, 1,1) AS letNom, v.VIP_NUMERO, v.VIP_NOM, v.VIP_PRENOM, f.FILM_TITRE, f.FILM_DATEREALISATION, p.PHOTO_ADRESSE,";
        sql = sql + " v.VIP_TEXTE FROM JOUE j JOIN FILM f ON j.FILM_NUMERO = f.FILM_NUMERO LEFT OUTER JOIN REALISATEUR r ON f.VIP_NUMERO = r.VIP_NUMERO";
        sql = sql + " LEFT OUTER JOIN VIP v ON r.VIP_NUMERO = v.VIP_NUMERO JOIN PHOTO p ON v.vip_numero = p.vip_numero";
        sql = sql + " WHERE p.PHOTO_NUMERO = 1 AND j.VIP_NUMERO = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.filmsVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM FILM f, REALISATEUR r WHERE r.VIP_NUMERO = f.VIP_NUMERO AND r.VIP_NUMERO = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.albumsVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT ALBUM_TITRE, ALBUM_DATE, MAISONDISQUE_NOM FROM COMPOSER c, ALBUM a, MAISONDISQUE m"
          sql = sql + " WHERE c.ALBUM_NUMERO = a.ALBUM_NUMERO AND a.MAISONDISQUE_NUMERO = m.MAISONDISQUE_NUMERO AND c.VIP_NUMERO = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

module.exports.defiledansVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
    if (!err) {
      let sql = "SELECT substring(v.VIP_NOM, 1,1) AS letNom, v.VIP_NUMERO, v.VIP_NOM, v.VIP_PRENOM, d.DEFILE_LIEU, d.DEFILE_DATE, p.PHOTO_ADRESSE, v.VIP_TEXTE";
      sql = sql + " FROM MANNEQUIN m, DEFILEDANS dd, DEFILE d, COUTURIER c, VIP v, PHOTO p WHERE m.VIP_NUMERO = dd.VIP_NUMERO AND v.vip_numero = p.vip_numero AND";
      sql = sql + " dd.DEFILE_NUMERO = d.DEFILE_NUMERO AND v.VIP_NUMERO = c.VIP_NUMERO AND c.VIP_NUMERO = d.VIP_NUMERO AND  p.PHOTO_NUMERO = 1 AND m.VIP_NUMERO = " + numStar;
      // console.log(sql);
      connexion.query(sql, callback);
      connexion.release();
    }
  });
}

module.exports.defilesVip = function(numStar, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT * FROM DEFILE d, COUTURIER c WHERE c.VIP_NUMERO = d.VIP_NUMERO AND c.VIP_NUMERO = " + numStar;
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}


////////////////////ARTICLES////////////////////////

module.exports.getVipWithArticle = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT DISTINCT VIP_NOM, VIP_PRENOM, v.VIP_NUMERO FROM vip v, apoursujet a";
            sql = sql + " WHERE v.VIP_NUMERO = a.VIP_NUMERO AND ARTICLE_NUMERO IS NOT null";
            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.getVipArticles = function(numStar, callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT ARTICLE_RESUME, ARTICLE_DATE_INSERT, v.VIP_NUMERO FROM article a, apoursujet aps, vip v";
            sql = sql + " WHERE aps.VIP_NUMERO = v.VIP_NUMERO AND a.ARTICLE_NUMERO = aps.ARTICLE_NUMERO AND v.VIP_NUMERO = " + numStar;
            //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

////////////////////ALBUM////////////////////////

module.exports.vipPhotosPrincipales = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT v.VIP_NUMERO as numStar, VIP_NOM, VIP_PRENOM, PHOTO_ADRESSE, v.VIP_NUMERO as numVip FROM vip v, photo p ";
            sql = sql + "WHERE v.VIP_NUMERO = p.VIP_NUMERO AND PHOTO_NUMERO = 1 ORDER BY VIP_NOM";
              //console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

module.exports.vipCommentairesPhotosPrincipales = function(vipNum,callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT PHOTO_COMMENTAIRE, PHOTO_ADRESSE, VIP_NOM, VIP_PRENOM, v.VIP_NUMERO FROM vip v, photo p ";
            sql = sql + "WHERE v.VIP_NUMERO = p.VIP_NUMERO AND v.VIP_NUMERO = " + vipNum;
              // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};

////////////////////ADMIN////////////////////////

module.exports.checkAdmin = function(login, pwd, callback) {
  db.getConnection(function(err, connexion) {
      if (!err) {
          let sql = "SELECT LOGIN, PASSWD FROM PARAMETRES WHERE login = \'" + login + "\' AND PASSWD = \'" + pwd + "\'";
            // console.log(sql);
          connexion.query(sql, callback);
          connexion.release();
      }
  });
}

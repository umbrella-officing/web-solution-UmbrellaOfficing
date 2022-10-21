// module.exports.renderFavoritos = (application, req, res) => {  

//     if (req.session.autenticado) {
  
//       const connection = application.config.dbConnection;
//       const spacesDao = new application.app.models.SpacesDAO(connection);
  
//       var id_user = Number(req.session.id_user)
  
//       spacesDao.renderFavoritos(id_user, (error, result) => {
//         if (error) throw error
  
//         autenticado = { 
//             title: result[0].sobre_mim,
//             avaliation: result.avaliação_sala,
             

//         };
  
//         res.render("pages/my-account/favoritos", autenticado);
  
//       });
  
//     } else {
//       autenticado = { autenticado: null };
//       res.render('pages/my-account/favoritos')
//     }    
//   }
  
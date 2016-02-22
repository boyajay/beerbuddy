var userController = require('../users/userController.js');
var helpers = require('./helpers.js'); 

module.exports = function (app, express) {
  
  app.get('/api/getBeerCats', userController.getBeerCats);
  app.post('/api/users/signin', userController.signin);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);
  app.get('/api/users/logout', userController.checkAuth);
  app.post('/api/users/addToList', userController.addToList);
  app.get('/api/users/getLists', userController.getLists);
  
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};


const express = require('express');

const route = express.Router();

const locationController = require('../Controllers/Locations');
const UsersController = require('../Controllers/Users');
const feedBackController = require('../Controllers/Feedback');
const parttypescontoller =require('../Controllers/Partype');
const orderController = require('../Controllers/Order');
const aboutController = require('../Controllers/About');

route.get('/locations', locationController.getLocation);
route.post('/userlogin',UsersController.userLogin);
route.post('/userSignUp',UsersController.userSignUp);
route.post('/saveOrder',orderController.saveOrderDetails);
route.post('/feedBack',feedBackController.saveFeedback);
route.get('/parttypes', parttypescontoller.getparttyes);
route.get('/about',aboutController.getabout);
module.exports = route;
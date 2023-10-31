
const express = require('express');
const { newAppointment, getAllAppointment} = require('../controller/appointmentController');

const router = express.Router();//creates an instance of an Express Router
console.log("newAppointment",newAppointment,"getAllAppointment",getAllAppointment)

//defines a route with the path and associates it with the HTTP POST method
router.route('/appointment/form').post(newAppointment);
//defines a route with the path and associates it with the HTTP GET method.
router.route('/appointment/table').get(getAllAppointment);

module.exports = router;
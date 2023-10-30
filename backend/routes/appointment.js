
const express = require('express');
const { newAppointment, getAllAppointment} = require('../controller/appointmentController');

const router = express.Router();
console.log("newAppointment",newAppointment,"getAllAppointment",getAllAppointment)
router.route('/appointment/form').post(newAppointment);

router.route('/appointment/table').get(getAllAppointment);

module.exports = router;

const express = require('express');
const { newContact, getAllContacts} = require('../controller/contactController');

const router = express.Router();//creates an instance of an Express Router
console.log("newContact",newContact,"getAllContacts",getAllContacts)
router.route('/contact/form').post(newContact);//defines a route with the path and associates it with the HTTP POST method

router.route('/contact/table').get(getAllContacts);// defines a route with the path and associates it with the HTTP GET method

module.exports = router;
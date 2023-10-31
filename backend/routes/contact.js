
const express = require('express');
const { newContact, getAllContacts} = require('../controller/contactController');

const router = express.Router();
console.log("newContact",newContact,"getAllContacts",getAllContacts)
router.route('/contact/form').post(newContact);

router.route('/contact/table').get(getAllContacts);

module.exports = router;
const express  = require('express');
const { register } = require('../../controllers/auth/auth-controller');
const router = express.Router();


router.post( '/signup', register)

module.exports = router;
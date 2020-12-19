const express = require('express');
const router = express.Router();
const register = require('../services/register');
const send_error_response = require('../middlewares/response').send_error_response;
const send_data_response = require('../middlewares/response').send_data_response;
const register_validator = require('../validators/register_validator');
const validator = require('../middlewares/payload_error_handler');

router.post('/', validator.payload_validator_handler(register_validator.payload), async(req, res) => {
    try {
        let username = req.body.name;
        let response_data = await register.createUser(username);

        send_data_response(req, res, response_data);
    } catch (error) {
        send_error_response(req, res, error);
    }
})

module.exports = router;
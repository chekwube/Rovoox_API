const express = require('express');
const router = express.Router();
const time = require('../services/time');
const send_error_response = require('../middlewares/response').send_error_response;
const send_data_response = require('../middlewares/response').send_data_response;

router.get('/', async(req, res) => {
        try {
            var response_data = await time.getTime();

            send_data_response(req, res, response_data);
        } catch (error) {
            send_error_response(error);
        }
    })

module.exports = router;
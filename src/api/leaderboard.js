const express = require('express');
const router = express.Router();
const leaderboard = require('../services/leaderboard');
const auth_middleware = require('../middlewares/authentication');
const send_error_response = require('../middlewares/response').send_error_response;
const send_data_response = require('../middlewares/response').send_data_response;

router.get('/', auth_middleware.authenticate, async(req, res) => {
    try {
        let response_data = await leaderboard.view(req.auth.name);

        send_data_response(req, res, response_data);
    } catch (error) {
        send_error_response(req, res, error);
    }
})

module.exports = router;
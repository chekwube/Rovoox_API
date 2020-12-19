const express = require('express');
const router = express.Router();
const game = require('../services/game');
const play_limiter = require('../middlewares/limiter').play_limiter;
const auth_middleware = require('../middlewares/authentication');
const send_error_response = require('../middlewares/response').send_error_response;
const send_data_response = require('../middlewares/response').send_data_response;

router.post('/play', play_limiter, auth_middleware.authenticate, async(req, res) => {
        try {
            let response_data = await game.play(req.auth.name);

            send_data_response(req, res, response_data);
        } catch (error) {
            send_error_response(req, res, error);
        }
    })
    .post('/claim_bonus', auth_middleware.authenticate, async(req, res) => {
        try {
            let response_data = await game.claimBonus(req.auth.name);

            send_data_response(req, res, response_data);
        } catch (error) {
            send_error_response(req, res, error);
        }
    })

module.exports = router;
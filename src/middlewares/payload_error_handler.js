const payload_validator = require('../validators/index');
const send_error_response = require('./response').send_error_response;

module.exports.payload_validator_handler = function (payload) {
	return async function (req, res, next) {
		payload_validator(req.body, payload)
			.then((result) => {
				next();
			})
			.catch((error) => {
                send_error_response(req, res, {statusCode: 400, message: error.message});
			});
	};
}
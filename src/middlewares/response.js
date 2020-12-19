module.exports = {
    send_error_response: function(req, res, error) {
        if (error) {
            let statusCode = error.statusCode? error.statusCode : 400;
            return res.status(statusCode).send({ message: error.message });
        }
    },
    send_data_response(req, res, response_data) {
        return res.status(200).send(response_data);
    }
};
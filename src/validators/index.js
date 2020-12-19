
const Joi = require('@hapi/joi');

module.exports = async (data, payload) => {
    return new Promise((resolve, reject) => {
        payload.validate(data)
        .then(result => {
            resolve();
        })
        .catch(error => {
            reject(error);
        });

    })
}
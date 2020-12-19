const Joi = require('@hapi/joi');

const payload = Joi.object().keys({
    name: Joi.string().required()
});

module.exports = {
    payload
};
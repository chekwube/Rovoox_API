const user = require('../models/user');
const auth_service = require('./authentication');

module.exports = {
    createUser: async(userName) => {
        try {
            let name = {
                name: userName
            };
            let token = await auth_service.generate_token({name});
            let res = await user.create({name: userName});

            if (res) return { token };
        } catch (error) {
            throw error
        }
    },
}
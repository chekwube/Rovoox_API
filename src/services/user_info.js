const user = require('../models/user');

module.exports = {
    get_info: async(name) => {
        try {
            const res = await user.findOne({ name }).select({ "__v": 0, "_id": 0 });

            return res;
        } catch (error) {
            throw error;
        }
    },
}
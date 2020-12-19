const user = require('../models/user');

module.exports = {
    view: async(name) => {
        try {
            let leaders = await user.find({}).select({"__v": 0, "_id": 0}).sort({ "points": "desc"}).limit(10).lean();

            for (let i = 0; i < leaders.length; i++) {
                leaders[i]["place"] = i + 1;
            };

            if (name) {
                let user_details = await user.findOne({ name });
                var above_user = await user.find({ points : { $gt : user_details.points } }).count();
                above_user += 1;
            }

            return { leaders, current_user_place: above_user };
        } catch (error) {
            throw error;
        }
    },

}
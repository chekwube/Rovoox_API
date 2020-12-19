const user = require('../models/user');

module.exports = {
    play: async(userName) => {
        try {
            let scoredPoints = Math.floor(Math.random() * 100) + 1;
            var res = await user.findOneAndUpdate({ name: userName }, { $inc: { points: scoredPoints }}, { new: true });
            return {
                points_added: scoredPoints,
                points_total: res.points,
            };
        } catch (error) {
            throw error;
        }
    },
    claimBonus: async(userName) => {
        try {
            let scoredPoints = Math.floor(Math.random() * 10) + 1;
            var res = await user.findOneAndUpdate({ name: userName }, { $inc: { points: scoredPoints }}, { new: true });

            return {
                points_added: scoredPoints,
                points_total: res.points,
            };
        } catch (error) {
            throw error;
        }
    },
}
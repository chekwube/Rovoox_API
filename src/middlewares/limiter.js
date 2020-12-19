const rateLimit = require("express-rate-limit");

module.exports.play_limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 5,
    message: `LOL, we know you enjoy playing this game,
                but you have reached your limit for this hour,
                please try again after an hour`
});
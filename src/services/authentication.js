const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

class Authentication{
    generate_token(data){
        return new Promise((resolve, reject) => {
            jwt.sign(data, secret, { expiresIn: "7d" }, function(error, token) {
                if (error) {
                    reject(error);
                } else {
                    resolve(token);
                }
            });
        });
    }

    verify_token(token){
        return new Promise((resolve, reject) => {
            jwt.verify(token.replace("Bearer ", ""), secret, function(error, decodedToken) {
                if (error) {
                    reject(error);
                } else {
                    resolve(decodedToken);
                }
            });
        });
    }
}

module.exports = new Authentication();
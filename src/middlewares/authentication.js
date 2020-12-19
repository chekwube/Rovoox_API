const auth_service = require('../services/authentication');

class auth_middleware{
    authenticate(req, res, next) {
        let path = req.originalUrl;
        let auth_token = req.body.token || req.query.token || req.headers['authorisation'];

        if (auth_token){
            var splitted_array = auth_token.split(' ');
            let bearer = splitted_array[0];

            if (bearer === 'Bearer') {
                let token = splitted_array[1];

                auth_service.verify_token(token)
                    .then(decoded =>{
                        req.auth = decoded.name;
                        next();
                    }).catch(error=>{
                        next(error);
                    });
            } else {
                res.status(401).send({ error: "Incorrect token, make sure 'Bearer ' is attched to you token" });
            }
        } else if (path === '/leaderboard') {
            req.auth = { name: null };
            next();
        }else{
            res.status(401).send({ error: "No token provided" });
        }
    }
}

module.exports = new auth_middleware();
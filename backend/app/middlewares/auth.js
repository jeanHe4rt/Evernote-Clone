require('dotenv').config();
const secret = process.env.JWT_TOKEN;

const jwt = require('jsonwebtoken');

const User = require('../model/user');

const withAuth = (req, res, next) => {
    // res.status(401).json({ error: 'Unauthorized: no token provided' });
    const token = req.headers['x-access-token'];
    console.log("" + token);
    if (!token)
        res.status(401).json({ error: 'Unauthorized: no token provided' });
    else {
        jwt.verify(token, secret, (err, decode) => {
            if (err)
                res.status(401).json({ error: 'Unauthorized: no token provided' });
            else {
                req.email = decode.email;
                User.findOne({ email: decode.email })
                    .then(user => {
                        req.user = user;
                        next();
                    })
                    .catch(err => {
                        res.status(401).json({ error: err });
                    })
            }

        })
    }
}

module.exports = withAuth;
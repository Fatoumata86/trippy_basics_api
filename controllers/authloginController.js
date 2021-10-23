const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret';

module.exports = {
    getAuthLoginPage: (req, res) => {
        const token = jwt.sign({ email: req.body.email }, JWT_SECRET)
        console.log(token);
        res.send(token);
    },
}
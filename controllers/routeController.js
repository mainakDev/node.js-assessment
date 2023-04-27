const path = require('path')

const getRoute = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
}

const postRoute = (req, res, next) => {
    
}

module.exports = {getRoute, postRoute}
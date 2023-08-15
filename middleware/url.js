function logUrl(req, res, next){
    console.log(`URL: ${req.protocol}://${req.get('host')}/${req.originalUrl}`);
    next();
}

module.exports = {logUrl}






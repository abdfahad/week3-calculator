function logReqBody(req, res, next){
    console.log(`Request Body: ${req.body}`);
    next();
}


module.exports = { logReqBody };
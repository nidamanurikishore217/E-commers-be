const customMiddleware = (req, res, next) => {
    console.log("request recived at middlware");
    next(); // Pass control to the next middleware
};


module.exports = customMiddleware
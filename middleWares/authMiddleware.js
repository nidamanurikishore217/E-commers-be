const JWTHelper = require('../utils/JWTHelper');

const authenticateJWT = (req, res, next) => {
    try{
        const token = req.headers['authorization']?.split(' ')[1]; // Extract token from header

        if (!token) {
          return res.status(403).json({"message":"Request Forbidden"}); // Forbidden if no token
        }
      
        const verificationResult = JWTHelper.verifyToken(token);
        if (!verificationResult.valid) {
            return res.status(403).json({"message":"Request Forbidden"});  // Forbidden if token is invalid
        }
      
        // If valid, attach the decoded user info to the request
        req.user = verificationResult.decoded;
        next(); // Proceed to the next middleware or route handler
    }catch(error){
        console.log(error);
        return res.status(403).json({"message":"Request Forbidden"}); ; // Forbidden if token is invalid
    }
};

module.exports = authenticateJWT;

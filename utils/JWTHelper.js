const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

class JWTHelper {
  /**
   * Generate a JWT token.
   * @param {Object} payload - The payload to include in the token.
   * @param {String} [expiresIn='1h'] - Expiration time of the token.
   * @returns {String} - The generated JWT token.
   */
  static generateToken(payload, expiresIn = '1h') {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
  }

  /**
   * Verify a JWT token.
   * @param {String} token - The JWT token to verify.
   * @returns {Object} - An object containing validity status and decoded data or error message.
   */
  static verifyToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return { valid: true, decoded };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }
}

module.exports = JWTHelper;

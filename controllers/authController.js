const authServices = require('../services/authServices');
const JWTHelper = require('../utils/JWTHelper')


class AuthController {
    async login(req, res) {
        try {
            const { password } = req.body;
            const user = await authServices.login(req.body.email);

            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            // Check if password is correct using the comparePassword method
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const { _id: userId, name, email, isAdmin } = user;
            const formattedUser = { userId, name, email, isAdmin }
            // Generate a JWT token
            const token = JWTHelper.generateToken(formattedUser);

            res.status(200).json({ ...formattedUser, token });

        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

}

module.exports = new AuthController()
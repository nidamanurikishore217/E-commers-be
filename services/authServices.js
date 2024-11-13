const User = require('../models/User')
class AuthServices {

    async login(email) {
        return await User.findOne({email})   
    }

    async register(email, password) {
        return { email, password };
    }

    

    async users(email,password){

        return {email,password}
    }
}



module.exports = new AuthServices();

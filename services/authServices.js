class AuthServices {

    async login(email, password) {

        return { email, password };
    }

    async register(email, password) {
        return { email, password };
    }

    async profile(email,password){

        return {email,password}
    }

    async users(email,password){

        return {email,password}
    }
}



module.exports = new AuthServices();

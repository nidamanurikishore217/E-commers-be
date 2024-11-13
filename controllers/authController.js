const authServices = require('../services/authServices');

class AuthController {
   
    async login (req,res){
        try{
            const { email, password} = req.body;
            const user = await authServices.login(email,password);
            res.status(200).json({ user });
    
        }
        catch(error){
            res.status(400).json({message:error.message})
        }
    }

    async register(req, res) {
        try {
            const {email, password}=req.body
            const user = await authServices.register(email,password);
            res.status(201).json({ user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async profile(req,res){
        try{
            const{email, password} =req.body
            const user =await authServices.profile(email,password);
            res.status(201).json({user})
        }
        catch(error){
            res.status(400).json({message:error.message})
        }
    }


    async users(req, res) {
        try {
            const userId = req.params.id;
            const { email, password } = req.body;
                const user = await authServices.users.find(email, password);
    
            if (user && user.id === userId) {
                res.status(200).json({ user });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    




    
}

module.exports = new AuthController()
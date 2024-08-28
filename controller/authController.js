import User from '../model/user.js';  // Import default export
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!email || !password || !name) {
            return res.status(400).send({ msg: 'All fields are required' });
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).send({ msg: 'User already exists' });
        }

        if (name.length < 6) {
            return res.status(400).send({ msg: 'Name should be at least 6 characters long' });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        const newUser = new User({
            email,
            name,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).send({ msg: 'User registered successfully' });
        
    } catch (error) {
        res.status(400).send(error);
    }
};


export const loginUser = async (req, res)=>{
    const {email, password} =req.body
    try {
        if(!email ||!password){
            return res.status(400).send({msg:'All fields are required'});
        }
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send({msg:'User not found'});
        }

        const ismatch = await bcryptjs.compare(password,user.password)
        if(!ismatch){
            return res.status(400).send({msg:'Invalid password'});


        }

        const token = jwt.sign({_id:user._id}, process.env.JWT_TOKEN)
        
        res.header('authToken', token).status(200).send({msg: 'User logged in successfully',
            token: token
     } )

       
        
    } catch (error) {
        res.status(400).send(error); 
    }
}

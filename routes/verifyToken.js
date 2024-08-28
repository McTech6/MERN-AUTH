import jwt from 'jsonwebtoken'

function verify(req,res, next){
    const token =req.header('authToken')
    if(!token) return res.status(401).send("Access Denied")
    
    try {
        const verify =jwt.verify(token,process.env.JWT_TOKEN)
        req.user =verify
        next()
    } catch (error) {
       res.status(400).send("Invalid Token") 
    }
}
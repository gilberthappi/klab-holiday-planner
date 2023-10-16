import jwt from 'jsonwebtoken'; // import jwt

export const verifyToken = (req, res, next) => {
try {
    const auth = req.headers.authorization.split(' ')[1]; // get token from header  
    if(!auth) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }
    jwt.verify(auth, process.env.JWT_SECRET, (err, decoded) =>{
        if(err) {
            return res.status(401).json({
                message: 'Invalid token'
        });
    }
        req.userId = decoded._id;
        next();
    }); // verify token
} catch (error) {
    console.log(error);
}
};
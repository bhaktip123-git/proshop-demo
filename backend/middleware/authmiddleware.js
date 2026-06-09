import jwt from 'jsonwebtoken';
import asynchandler from './asynHandler.js';
import User from '../models/usermodel.js';

//protect routes
 const protect = asynchandler(async (req, res, next) =>{
    let token;

    // read the JWT from the cookie
    token = req.cookies.jwt;

    if(token){
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId).select('-password');
        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error('Not autorized, token failed');
      }
    } else {
        res.status(401);
        throw new Error('Not autorized, no token');
    }
});

//admin middleware
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401);
        throw new Error('Not autorized as admin');
    }
};

export { protect, admin };
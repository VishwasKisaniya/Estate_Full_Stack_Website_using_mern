import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import Listing from '../models/listing.models.js';


export const test = (req,res) =>{
    res.send('Hello Vishu in controllers');
}

export const updateUser = async (req, res,next) =>{
    if(req.user.id !== req.params.id) return next(errorHandler(401,"You can update only your own account!"))
    try {
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set:{
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, {new:true} )

        const {password, ...rest} = updateUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error)
    }
};

export const deleteUser = async (req,res,next)=>{
    if(req.user.id !== req.params.id) return next(errorHandler(401, 'You can delete your own account only!'));
    try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token')
        res.status(200).json('User has been deleted!');

    } catch (error) {
        next(error);
    }    
}


export const getUserListings = async (req,res,next) =>{
    if(req.user.id === req.params.id) {
        try {
            const listings = await Listing.find({userRef: req.params.id});
            res.status(200).json(listings);
            
        } catch (error) {
            
        }
    }
    else{
        return next(errorHandler(401, 'You can view only your own listings!'));
    }
    
}

export const getUser = async (req,res,next) =>{
    try {
        const user = await User.findById(req.params.id);

        if(!user) return next(errorHandler(404, 'User not found!'));

        const {password: pass, ...rest} = user._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}
import {Request, Response} from 'express'

import User from '../models/user';


export const signUp = async (req: Request, res: Response) => {
    const {name,email, password} = req.body;
    const user = new User({name,email, password});
    await user.save();
    res.send({message: 'Successfully signed up'});
}



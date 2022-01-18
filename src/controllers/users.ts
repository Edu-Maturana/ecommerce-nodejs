import { Response } from "express";

import User from "../models/user";

export const EditAddress = async (req: any, res: Response) => {
    const { address } = req.body;
    const { id } = req.user;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    await User.update({ address }, { where: { id } });

    return res.status(200).json({
        message: "Address updated successfully",
    })
}

export const getUser = async (req: any, res: Response) => {
    const { id } = req.user;

    const user = await User.findByPk(id);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    return res.status(200).json({
        user,
    })
}


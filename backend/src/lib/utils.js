import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {

    const token = jwt.sign({userId} , process.env.JWT_SECRET, {
        expiresIn:"7d" //expire in 7 days
    })

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", //  CSRF ATTACKS CROSS-SITE REQUEST FORGERY ATTACKS
        secure: process.env.NODE_ENV !== "development" //http or use https in production
    });

    return token;
}   
import { generateToken } from "../lib/util.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
   
    const { fullName, email, password } = req.body || {};
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "Cần điền đầy đủ các trường" });
        }


        //hash password
        if(password.length < 6) {
            return res.status(400).json({message: "Mật khẩu phải ít nhất 6 kí tự"})
        }

        const user = await User.findOne({email})

        if(user) return res.status(400).json({message: " Email đã tồn tại"});

        const salt = await bcrypt.genSalt(10); 
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            email,
            fullName,
            password: hashPassword
        })

        if(newUser){
            //gen jwt token here
            generateToken(newUser._id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        }else{
            res.status(400).json({message:"Dữ liệu người dùng không hợp lệ"})
        }
   }catch(error){
    console.log("Có lỗi trong đăng ký", error.message);
    res.status(500).json({message: "Internal Server Error"});
   }
}



export const logout = (req, res) => {
    res.send('logout route');
}
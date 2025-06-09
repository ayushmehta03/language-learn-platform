import User from "../models/User.js";
import jwt from "jsonwebtoken"

export async function signup(req,res){
    const {email,password,fullName}=req.body;
    try{
    if(!email||!password||!fullName){
        return res.status(400).json({
            message:"All fields are required"})
        
    }
    if(password.length<6){
        return res.status(400).json({
            message:"password must be of 6 characters"
        });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  return res.status(400).json({ message: "Invalid email format" });
}
   
const existingUser=User.findOne({email});
if(existingUser){
    res.status(400).json({
        message: "Email already exists"
    });
}
 const idx= Math.floor(Math.random()*100)+1;
 const randomAvatar= `https://avatar.iran.liara.run/public/${idx}.png`
 const newUser= await User.create({
    email,
    fullName,
    password,
    profilepic:randomAvatar,
 })






const token=jwt.sign({userId:newUser._id},process.env.JWT_SECRET_KEY,{
    expiresIn:"7d"
})
res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict",
    secure:process.env.NODE_ENV==="production",

} )
res.status(201).json({
    success:true,
    user:newUser
    
})

} catch(error){
    console.log("Error in signup part")
    res.status(500).json({
        message:"Internal Error"
    })

    }

}

export async function login(req,res){
    try{
        const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({
            message:"All fileds are required"
        });
    }
    const user= await User.findOne({email});
    if(!user) return res.status(401).json({message:"Invalid email or password"})
    const isPasswordCorreect= await user.matchPassword(password);
    if(!isPasswordCorreect) return res.status(401).json({message:"Invalid email or password"});
    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
    expiresIn:"7d"
})
res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000,
    httpOnly:true,
    sameSite:"strict",
    secure:process.env.NODE_ENV==="production",

} )
res.status(200).json({
    success:true,user
})




    } catch(error){
        console.log(error)
          console.log("Error in login part")
    res.status(500).json({
        message:"Internal server Error"
    })
    }
}

export function logout(req,res){
    res.clearCookie("jwt");
    res.status(200).json({
        success:true,
        message:"Log Out Successfull"
    });
    
}
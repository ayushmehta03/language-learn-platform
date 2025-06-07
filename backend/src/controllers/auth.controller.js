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
 const newUser= new User.create({
    email,
    fullName,
    password,
    profilepic:randomAvatar,
 })

const token=jwt.sign()


} catch(error){

    }

}

export async function login(req,res){
    res.send("login Route")
}

export function logout(req,res){
    res.send("LogOut Route")
}
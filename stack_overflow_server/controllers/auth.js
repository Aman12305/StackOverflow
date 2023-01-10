import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import nodemailer from 'nodemailer'
import image from '../models/imageSchema.js'
import fs from 'fs'

import users from '../models/userSchema.js'
import validator from 'deep-email-validator'

async function isEmailValid(email){
    const isValid = await validator.validate(email);
    return isValid;
}

export const signup = async (req, res) => {
    const { displayname, email, password,image } = req.body;

    const {valid, reason, validators} = await isEmailValid(email);

    if(valid)
    {
        try{

            const existinguser = await users.findOne({ email });
            if(existinguser){
                return res.status(404).json({ message: "User already Exist.",err:"User already Exist."})
            }
    
            const hashedPassword = await bcrypt.hash(password, 12)
            const newUser = await users.create({ name:{
                display:displayname,
                private:displayname
            }, email, password: hashedPassword,image }) 
            const token = jwt.sign({ email: newUser.email, id:newUser._id}, process.env.JWT_SECRET , { expiresIn: '8h'});

            res.status(200).json({message:"User sucessfully created",data: newUser, token})
        } catch(err){
            res.status(500).json({message:"Something went wrong...",err:err.message})
        }
    }
    else
    {
        res.status(500).json({message:"Email is not valid",err:reason});
    }
    
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist.",err:"User don't Exist."})
        }

        const isPasswordCorrect = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message : "Invalid credentials",err:"Invalid credentials"})
        }

        const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET , { expiresIn: '8h'});
        res.status(200).json({ message:"User sucessfully logged in",data: existinguser, token })
    } catch (err)  {
        res.status(500).json({message:"Something went wrong...",err:err.message})
    }
}

export const sendMailtome = async(req,res) => {
    
    const {email,message} = req.body;

    const {valid, reason, validators} = await isEmailValid(email);

    if(!valid)
    {
        return res.status(404).json({message:"Email is not valid",err:validators[reason].reason});
    }

    try{

        let transporter = nodemailer.createTransport({
            // host: 'smtp.gmail.com',
            service:'gmail',
            port: 465,
            secure: true,
            auth: {
                user: 'amansolanki23059@gmail.com',
                pass: 'abmcjhefxsffjxwe'
            },
        });
    
        let mailOptions = {
            from:'amansolanki23059@gmail.com',
            to: 'amansolanki23059@gmail.com',
            subject: 'Message from stackoverflow user',
            html: `<h3>New mail from ${email}</h3><p>Message: ${message}</p>`
        };
    
        transporter.sendMail(mailOptions,(err,info)=>{
            if(err)
            {
                return res.status(404).json({err:err,message:"Error"});
            }
            else{
                return res.status(200).json({message:"Mail sent sucessfully",data:info});
            }
        })
    }
    catch(err){
        res.status(404).json({message:"Something is wrong in sending mail",err:err.message});
    }
}
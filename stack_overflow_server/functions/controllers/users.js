import mongoose from 'mongoose'
import Users from '../models/userSchema.js'
// import Image from '../models/imageSchema.js'
import jwt from 'jsonwebtoken'


export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await Users.find().select(['_id','name.display','about','image','joinedOn','posts','location'])
        res.status(200).json({message:"Response send sucessfully",data:allUsers});
    } catch (error) {
        res.status(500).json({ message: error.message,err:error.message });
    }
}

export const getAllImages = async(req,res) =>{
    try{
        const allImages = await image.find();
        res.status(200).json({message:"All image fetched sucessfully",data:allImages});
    }
    catch(error){
        res.status(500).json({message:error.message,err:error.message})

    }
}

export const updateProfile = async (req, res) => {
    const { id:_id } = req.params;

    console.log(req.body);

    const {displayname,privatename,website,github,twitter,location,about,image} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send({message:'User is invalid',err:"User is invalid"});
    }

    Users.findById(_id)
    .then(data =>{

        Users.findByIdAndUpdate(_id, { $set: { 
            'name':{
                'display':(displayname===''?data.name.display:displayname),
                'private':(privatename===''?data.name.private:privatename)
            },
            'link':{
                'website':(website===''?data.link.website:website),
                'github':(github===''?data.link.github:github),
                'twitter':(twitter===''?data.link.twitter:twitter)
            },
            'about':(about===''?data.about:about),
            'location':(location===''?data.location:location),
            'image':(image===''?data.image:image)
        }},{new:true})
        .then((data)=>{
            const token = jwt.sign({ email: data.email, id:data._id}, process.env.JWT_SECRET , { expiresIn: '8h'});
            res.status(200).json({message:'User update sucessfully',data:data,token})
        }).catch(err=>{
            res.status(500).json({message:err.message,err:err.message})
        })

    }).catch(err =>{
        res.status(500).json({message:err.message,err:err.message})
    })

    


}

//only when we wnat to upload a file
// export const updateProfile = async (req, res) => {
//     const { id:_id } = req.params;

//     const {displayname,privatename,website,github,twitter,location,about} = req.body;

//     if(!req.file)
//     {
//         return res.status(500).json({message:"File is not received",data:req.body})
//     }
    
//     const file = req.file;
//     // console.log(file);

//     if(!mongoose.Types.ObjectId.isValid(_id)){
//         return res.status(404).send({message:'User is invalid',err:"User is invalid"});
//     }

//     var newItem = {
//         user_id: _id,
//         data : fs.readFileSync(file.path),
//         contentType: file.mimetype
//     }

//     image.findOne({user_id:_id}).
//     then((data)=>{
//         if(data)
//         {
//             image.findByIdAndUpdate(data._id,{$set:{'data':newItem.data,'contentType':newItem.contentType}})
//             .then(imagedata=>{
//                 Users.findByIdAndUpdate( _id, { $set: { 'image':imagedata._id,
//                 'name':{
//                     'display':displayname,
//                     'private':privatename
//                 },'link':{
//                     'website':website,
//                     'github':github,
//                     'twitter':twitter
//                 }, 'about': about,'location':location }}, { new: true } )
//                 .then((data)=>{
//                     const token = jwt.sign({ email: data.email, id:_id}, process.env.JWT_SECRET , { expiresIn: '8h'});
//                     return res.status(200).json({message:'Response sent sucessfully',data:data,token})
//                 })
//                 .catch(err=>{
//                     return res.status(405).json({ message: err.message,err:err.message })
//                 })
//             })
//             .catch(err=>{
//                 return {message:"Image updation failed",err:err.message};
//             }) 
//         }
//         else
//         {
//             image.create(newItem, (err, data) => {
//                 if (err) {
//                     return res.status(500).json({message:"New image creation failed",err:err.message}); 
//                 }
//                 else {
//                     Users.findByIdAndUpdate( _id, { $set: { 'image':data._id,
//                     'name':{
//                         'display':displayname,
//                         'private':privatename
//                     },'link':{
//                         'website':website,
//                         'github':github,
//                         'twitter':twitter
//                     }, 'about': about,'location':location }}, { new: true } )
//                     .then((data)=>{
//                         const token = jwt.sign({ email: data.email, id:_id}, process.env.JWT_SECRET , { expiresIn: '8h'});
//                        return  res.status(200).json({message:'Response sent sucessfully',data:data,token})
//                     })
//                     .catch(err=>{
//                        return  res.status(500).json({ message: err.message,err:err.message })
//                     })
//                 }
//             });
//         }
//     })
        
// }

import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv'
import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

dotenv.config();

const Database_url = process.env.DATABASE_URL;

// console.log(Database_url);


// let multer_storage = multer.diskStorage({
//     destination: (req, file, cb) => { 
//         cb(null, path.join(__dirname, settings.multer.destination))
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => { 
//         cb(null, './uploads')
//     },
//     filename: (req, file, cb) => {
//         const {id} = req.params;
//         cb(null, id);
//     }
// });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname)
    }
  })

let multer_options = {
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (settings.multer.allowed_files.indexOf(file.mimetype) >= 0) 
            return cb(null, true); // this return is missing

        cb(new Error('Invalid file'));
    }
}
 
const upload = multer({storage:storage});


// const storage = new GridFsStorage({
//     url: Database_url,
//     file:(req,file) =>{
//         return new Promise((resolve,reject)=>{
//             crypto.randomBytes(16,(err,buf)=>{
//                 if(err)
//                 {
//                     return reject(err);
//                 }

//                 const filename = buf.toString('hex') + (file.originalname);
//                 const fileInfo = {
//                     filename:filename,
//                     bucketName: 'uploads'
//                 };
//                 resolve(fileInfo);
//             });
//         });
//     }
// })

// const upload = multer({storage});

export default upload;
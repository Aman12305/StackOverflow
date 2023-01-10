import express from 'express';

import { login, signup } from '../controllers/auth.js'
import { getAllImages, getAllUsers, updateProfile} from '../controllers/users.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/imageUpload.js';

const router = express.Router();

// router.post('/signup',upload.single('file'),signup)
router.post('/signup',signup)
router.post('/login', login)

router.get('/getAllUsers', getAllUsers)
router.get('/getAllImages',getAllImages)
// router.patch('/update/:id',auth,upload.single('file'),updateProfile)
router.patch('/update/:id',auth,updateProfile)

export default router


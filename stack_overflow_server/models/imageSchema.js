import mongoose,{ Schema } from "mongoose"

const imageSchema = new Schema({
    user_id:{
       type: String,
       unique:true
    },
    data: Buffer,
    contentType: String
})

export default mongoose.model('image',imageSchema)
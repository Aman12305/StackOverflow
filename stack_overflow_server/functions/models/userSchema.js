import mongoose, { Schema } from "mongoose";

const user = new Schema({
    image:{
        type:String,
        default: ""
    },
    name: {
        display:{
            type:String,
            default: "",
            required: true
        },
        private:{
            type: String, 
            default: "",
            required: true
        }
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    about: {
        type: String ,
        default: ""
    },
    joinedOn: {
        type: Date, 
        default: Date.now 
    },
    posts:{
        type: [String]
    },
    link:{
        website:{
          type: String,
          default:""
        },
        github:{
            type: String,
            default:""
        },
        twitter:{
          type: String,
          default:""
        }
    },
    location:{
        type:String,
        default: ""
    },
    badges:{
        gold_badges:{
            type:Number,
            default: 0
        },
        silver_badges:{
            type:Number,
            default: 0
        },
        bronze_badges:{
            type:Number,
            default: 0
        }
    }
});

export default mongoose.model('user', user);
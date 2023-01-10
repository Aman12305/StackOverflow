import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
    questionTitle: { 
        type: String
    },
    questionBody: { 
        type: String
    },
    questionTags: { 
        type: [String]
    },
    noOfAnswers: { 
        type: Number, 
        default: 0
    },
    upVotes: { 
        type: [String], 
        default: []
    },
    downVotes: { 
        type: [String], 
        default: []
    },
    userPosted: { 
        type: String
    },
    userId: { 
        type: String
    },
    askedOn: { 
        type: Date, 
        default: Date.now
    },
    answer: [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        answeredOn: { 
            type: Date, 
            default: Date.now
        },
    }]
})

export default mongoose.model("question", questionSchema)
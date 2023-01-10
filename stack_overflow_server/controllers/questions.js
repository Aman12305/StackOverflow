import Questions from '../models/questionSchema.js'
import mongoose from 'mongoose'

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;
    const userId = req.userId;
    const postQuestion = new Questions({ ...postQuestionData, userId});
    try {
        await postQuestion.save();
        res.status(200).json({message:"Posted a question successfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Couldn't post a new question",err:error.message})        
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find().limit(20);
        res.status(200).json({message:"All questions fetched sucessfully",data:questionList});
    } catch (error) {
        res.status(404).json({ message: error.message,err:error.message });
    }
} 

export const deleteQuestion = async (req, res) => {
    const { id:_id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        await Questions.findByIdAndRemove( _id );
        res.status(200).json({ message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const voteQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const { value } = req.body;
    const userId = req.userId;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        const question = await Questions.findById(_id)
        const upIndex = question.upVotes.findIndex((id) => id === String(userId))
        const downIndex = question.downVotes.findIndex((id) => id === String(userId))

        // console.log({
        //     'question':question,
        //     'userId':userId,
        //     'upIndex':upIndex,
        //     'downIndex':downIndex,
        //     'value':value
        // })

        if(value === 'upVote'){
            if(downIndex!==-1){
                question.downVotes = question.downVotes.filter((id) => id !== String(userId))
            } 
            if(upIndex === -1){
                question.upVotes.push(userId)
            }else{
                question.upVotes = question.upVotes.filter((id) => id !== String(userId))
            }
        }
        else if(value === 'downVote'){
            if(upIndex !== -1){
                question.upVotes = question.upVotes.filter((id) => id !== String(userId))
            } 
            if(downIndex === -1){
                question.downVotes.push(userId)
            }else{
                question.downVotes = question.downVotes.filter((id) => id !== String(userId))
            }
        }
        await Questions.findByIdAndUpdate( _id, question )
        res.status(200).json({ message: "voted successfully..."})
    } catch (error) {
        res.status(404).json({ message: "id not found",err:error.message})
    }
}
import React from 'react'
import { Link } from 'react-router-dom'
import {BiUserCircle} from 'react-icons/bi'
import moment from 'moment'

export default function QuestionDiv({question}) {
  return (
    <div className="questiondiv">
        <div className="row">
            <div className="question_left">
                <div>{question.upVotes.length} votes</div>
                <div>{question.downVotes.length} downVotes</div>
                <div>{question.noOfAnswers} answers</div>
            </div>
            
            <div className="question_right">
                <Link to={`/questions/${question._id}`} className="question_link">
                   {question.questionTitle}
                </Link>
                <div className="question_description">
                    {question.questionBody}
                </div>
                <div className="question_tags">
                    {
                       question.questionTags.map((val,key)=>(
                         <Link to={`/questions/tagged/${val}`} className='tech_tag' key={key}>{val}</Link>
                       ))
                    }
                </div>
                <div >
                    <div style={{display:"flex",float:'right',alignItems:'center',fontSize:'10px'}}>
                        <div style={{display:'flex',alignItems:'center',marginRight:'5px',fontSize:"12px"}}>
                            <BiUserCircle style={{marginRight:"3px"}}/>
                            <Link to={`/user/${question.userId}/profile`}>{question.userPosted}</Link>
                        </div>
                        <span>asked on {moment(question.askedOn).fromNow()}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

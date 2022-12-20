import React from 'react'
import { Link } from 'react-router-dom'

const tags=['html','javascript','css','android'];

export default function QuestionDiv() {
  return (
    <div className="questiondiv">
        <div className="row">
            <div className="question_left">
                <div>votes</div>
                <div>likes</div>
                <div>views</div>
                <span className="question_user">
                    Aman
                </span>
            </div>
            
            <div className="question_right">
                <div className="question_link">
                    I am Beginner 
                </div>
                <div className="question_description">
                    I am Beginner 
                </div>
                <div className="question_tags">
                    {
                       tags.map((val,key)=>{
                        return <Link to={`/questions/tagged/:${val}`} className='tech_tag' key={key}>{val}</Link>
                       })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

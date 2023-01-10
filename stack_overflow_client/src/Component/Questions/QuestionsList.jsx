import React from 'react'
import QuestionDiv from './QuestionDiv'

export default function QuestionsList({questionsList}) {
    
  return (
    <div>
        {
            questionsList.length===0?
            <h4 style={{marginLeft:"10px",fontWeight:"400"}}>Sorry questions with this tag is unavailable</h4>
            :
            questionsList?.map((question,idx)=>(
                <QuestionDiv key={idx} question={question}/>
            ))
        }
        
    </div>
  )
}

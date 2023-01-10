import React from 'react'
import Answerdiv from './Answerdiv'
import './Answer.css'


export default function AnswerList({answerList}) {
  return (
    <div style={{marginLeft:"10px",padding:"10px 0"}}>
        {
            answerList?.map((answer,idx)=>(
                <Answerdiv key={idx} answer={answer}/>
            ))
        }
    </div>
  )
}

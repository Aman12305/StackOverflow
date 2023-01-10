import React from 'react'
import { Link } from 'react-router-dom'
import { alltags } from '../util'

export default function QuestionsRight() {
  return (
    <div className="right_container">
          <div className="related_tags right_container_div">
            <span style={{marginBottom:"10px"}}>Related Tags</span>
            {
              alltags.map((tag,key)=>{
                return (
                  <span style={{marginBottom:"10px"}} key={key}>
                    <span className='tech_tag' ><Link to={`/questions/tagged/${tag.tagname}`} style={{textDecoration:"none"}}>{tag.tagname}</Link></span>
                     <span style={{fontSize:"12px"}}>×{tag.tagquestions}</span>
                  </span>
                )
              })
            }
            
          </div>

          <div className="network_question right_container_div">
            <span>Hot Network Question</span>
            <a>Hey</a>
          </div>

        </div>
  )
}

import React, { useEffect ,useState} from 'react'
import './Questions.css'
import { FaFilter} from 'react-icons/fa'
import QuestionDiv from './QuestionDiv'
import { alltags } from '../util'
import { Link,useLocation,useParams } from 'react-router-dom'
import AskQuestion from './AskQuestion'

export default function Questions() {

  const location = useLocation();

  const [questiontag,setquestiontag] = useState('');
  
  const asktag = () =>{
    let a = location.pathname.indexOf(':');
    if(a!==-1)
    setquestiontag(location.pathname.slice(a+1,location.pathname.length));
  }

  useEffect(()=>{
    asktag();
  })
 

  return (
    <div className='container'>
      <div className="row">
        <div className="left_container">
          <div className='left_container_topdiv'>
            <div className="left_container_topdiv1">
              <span className='left_container_title'>{(location.pathname==='/questions')?("All questions"):(`Questions tagged ${questiontag}`)}</span>
              <Link to='/questions/ask' className='button hover'>Ask Questions</Link>
            </div>
            <div className="left_container_topdiv2">
              <h5 className='totalquestions'>total no. of Questions</h5>
              <div className="topdiv2_tags">
                <div className="alltags">
                  <div className="tags">Newest</div>
                  <div className="tags">Active</div>
                  <div className="tags">Bountied</div>
                  <div className="tags">Unanswered</div>
                </div>
                <div className="filtertags">
                  <FaFilter/>
                  <span>Filter</span>
                </div>
              </div>
            </div>
          </div>
          <AskQuestion/>
          <QuestionDiv/>
          <QuestionDiv/>
        </div>
        <div className="right_container">
          <div className="related_tags right_container_div">
            <span style={{marginBottom:"10px"}}>Related Tags</span>
            {
              alltags.map((tag,key)=>{
                return (
                  <span style={{marginBottom:"10px"}}>
                    <span className='tech_tag' key={key}><Link to={`/questions/tagged/:${tag.tagname}`} style={{textDecoration:"none"}}>{tag.tagname}</Link></span>
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



      </div>
    </div>
  )
}

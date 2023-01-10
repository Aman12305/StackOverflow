import React, { useEffect ,useState} from 'react'
import './Questions.css'
import { FaFilter} from 'react-icons/fa'
import { Link,useLocation,useParams } from 'react-router-dom'
import QuestionsList from './QuestionsList'
import QuestionsRight from './QuestionsRight'
import { useSelector } from 'react-redux'

export default function Questions() {

  const questionsList = useSelector(state => state.questionsReducer)

  const location = useLocation();

  const [questiontag,setquestiontag] = useState('');

  const {id} = useParams();
  const [tagged,setTagged] = useState(questionsList?.data||[]);

  useEffect(()=>{

    if(id)
    {
      setquestiontag(id);
      const elements = questionsList?.data?.filter(item => item.questionTags.includes(id))
      if(elements)
      {
        setTagged(elements)
      }
    }
    else{
      setTagged(questionsList?.data||[])
    }
    
    // setTagged(elements);
  },[location.pathname,questionsList])
 

  return (
    <div className='container'>
      <div className="row">
        <div className="left_container">
          <div className='left_container_topdiv'>
            <div className="left_container_topdiv1">
              <span className='left_container_title'>{(location.pathname==='/questions')?("All questions"):(`Questions tagged ${questiontag}`)}</span>
              <Link to='/questions/ask' className='button'>Ask Questions</Link>
            </div>
            <div className="left_container_topdiv2">
              <h5 className='totalquestions'>total no. of Questions {tagged.length||''}</h5>
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
          <QuestionsList questionsList={tagged}/>
        </div>
        <QuestionsRight/>
      </div>
    </div>
  )
}

import React,{useState,useEffect} from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
import AnswerList from '../Answer/AnswerList';
import QuestionsRight from './QuestionsRight';
import { useDispatch, useSelector } from 'react-redux';
import { postAnswer } from '../../actions/question';
import moment from 'moment'
import Questionsdesc from './Questionsdesc';
import copy from 'copy-to-clipboard'
import { useLocation } from 'react-router-dom';

export default function QuestionsDetail() {
    const questionsList = useSelector(state => state.questionsReducer)

    const { id } = useParams();

    const [question,setQuestion] = useState(questionsList?.data?.filter(item=> item._id===id)[0]||null);
    const navigate = useNavigate();
    
    const user = useSelector((state) => (state.currentUserReducer))
    const dispatch = useDispatch();

    const [User,setUser] = useState(null);

    useEffect(()=>{
        if(questionsList)
        {
            setQuestion(questionsList?.data?.filter(item=> item._id===id)[0])
        }
        else{
            setQuestion(null);
        }

        const userData = localStorage.getItem('Profile');

        if(userData)
        {
            setUser(JSON.parse(userData).data)
        }
        else
        {
            setUser(null);
        }

    },[questionsList,user])

    

    const [answer,setAnswer] = useState('');
    const postUserAnswer = (e) =>{
        e.preventDefault();

        if(User===null)
        {
            alert('You must have login to answer');
            navigate('/auth/login');
            return
        }

        if(answer.length<20)
        {
            alert('Please elaborate more so that others can easily able to understand');
            return;
        }

        if(question?.userId===User?._id)
        {
            alert('You cannot able to answer this question as you are creator of this question');
            setAnswer('');
            return;
        }

        dispatch(postAnswer({id:question?._id,answerBody:answer,noOfAnswers:question?.noOfAnswers+1,userAnswered:User?.name.display})).then(data=>{
            if(data)
            {
                alert(data);
            }
            else
            {
                setAnswer('');
                alert('Answer uploaded Sucessfully');
            }
        })

    }

    const location = useLocation()

    const handleShare = () =>{
        copy(process.env.REACT_APP_URL+location.pathname);
        alert('Copied Url: '+ process.env.REACT_APP_URL+location.pathname)

    }


  return (
    <div className='container'>
        {
            question===null ?
            <h1>Loading...</h1>
            :
            <div className="row">
                <div className="left_container">
                    <div className="left_container_topdiv">
                        <div className="left_container_topdiv1">
                            <span className='left_container_title'>{question?.questionTitle}</span>
                            <Link to='/questions/ask' className='button'>Ask Questions</Link>
                        </div>
                        <span style={{fontSize:"12px",color:"grey",paddingLeft:"10px"}}>Asked {moment(question?.askedOn).fromNow()}</span>
                        <Questionsdesc question={question}/>
                    </div>
                    {
                        question?.answer.length!==0?
                        <AnswerList answerList={question?.answer}/>
                        :
                        <p style={{marginLeft:'10px'}}>There are no answer posted for this questions</p>
                    }

                    <button style={{margin:"5px",fontSize:"10px"}} onClick={handleShare}>Share</button>

                    <form className="your_answer" onSubmit={postUserAnswer}>
                        <h2 style={{fontWeight:'400'}}>Your Answer</h2>
                        <textarea value={answer} onChange={(e)=>setAnswer(e.target.value)} required></textarea>
                        <button className='youranswerbutton'>Post Your Answer</button>
                    </form>

                    <p style={{marginLeft:'10px'}}>Not the answer you're looking for? Browse other questions tagged 
                        {
                            question?.questionTags.map((tag,idx)=>(
                                <Link to={`/questions/tagged/${tag}`} key={idx} className='tech_tag'>{tag}</Link>
                            ))
                        } or <Link to='/questions/ask'>ask your own question</Link>. 
                    </p>
                    
                </div>
                <QuestionsRight/>
            </div>

        }
    </div>
  )
}

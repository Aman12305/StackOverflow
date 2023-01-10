import React,{useState} from 'react'
import {BiUpArrow,BiDownArrow,BiUserCircle} from 'react-icons/bi'
import moment from 'moment'
import '../Answer/Answer.css'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { voteQuestion } from '../../actions/question'
import { useEffect } from 'react'

export default function Questionsdesc({question}) {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const user = useSelector(state => state.currentUserReducer)

    const [User,setUser] = useState(null);

    useEffect(()=>{
        const userData = localStorage.getItem('Profile')

        if(userData)
        {
            setUser(JSON.parse(userData).data)
        }
        else
        {
            setUser(null)
        }

    },[user])

    const handleUpVote = () =>{

        if(User===null)
        {
            alert('You must have to login first for this action');
            navigate('/auth/login');
            return;
        }

        if(User?._id===question?.userId)
        {
            alert('You cannot vote your question');
            return;

        }

        const value = 'upVote'
        dispatch(voteQuestion(question?._id,value)).then((data)=>{
            if(data)
            {
                alert(data);
            }
            else
            {
                alert('Voted sucessfully');
            }
        })

    }

    const handledownVote = () =>{
        if(User===null)
        {
            alert('You must have to login first for this action');
            navigate('/auth/login');
            return;
        }
        if(User?._id===question?.userId)
        {
            alert('You cannot vote your question');
            return;

        }
        const value = 'downVote'
        dispatch(voteQuestion(question?._id,value)).then((data)=>{
            if(data)
            {
                alert(data);
            }
            else
            {
                alert('Voted sucessfully');
            }
        })
    }

    const userList = useSelector(state => state.usersReducer)
    const questionUser = userList?.filter(item => item._id===question?.userId)[0]

  return (
        <div className='answerdiv' style={{border:'none'}}>
            <div className="answervote">
                <BiUpArrow className='voteicon' onClick={handleUpVote}/>
                <span>{question?.upVotes.length-question?.downVotes.length}</span>
                <BiDownArrow className='voteicon' onClick={handledownVote}/>
            </div>
            <div className='answer'>
                <p className="answerBody">
                    {question?.questionBody}
                </p>
                <div>
                    <div className="answeruser">
                        <span style={{fontSize:'10px',padding:"3px 3px",marginBottom:"5px"}}>asked on {moment(question?.askedOn).fromNow()}</span>
                        <div>
                            <BiUserCircle className='answeruserimage'/>
                            <Link to={`/user/${question?.userId}/profile`} className='answerusername'>{questionUser?questionUser.name.display:''}</Link>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
  )
}



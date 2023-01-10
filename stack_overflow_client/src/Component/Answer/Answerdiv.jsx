import React,{useState} from 'react'
import {BiUpArrow,BiDownArrow,BiUserCircle} from 'react-icons/bi'
import moment from 'moment'
import { Link } from 'react-router-dom';

export default function Answerdiv({answer}) {

    const [votes,setVotes] = useState(0);
    const handleUpVote = () =>{
        setVotes(votes+1);
    }

    const handledownVote = () =>{
        setVotes(votes-1);
    }

  return (
    <div className='answerdiv'>
        <div className="answervote">
            <BiUpArrow className='voteicon' onClick={handleUpVote}/>
            <span>{votes}</span>
            {/* {answer.votes} */}
            <BiDownArrow className='voteicon' onClick={handledownVote}/>
        </div>
        <div className='answer'>
            <p className="answerBody">
                {answer.answerBody}
            </p>
            <div>
                <div className="answeruser" style={{backgroundColor:'white'}}>
                    <span style={{fontSize:'10px',padding:"3px 3px",marginBottom:"5px"}}>answered on {moment(answer.answeredOn).fromNow()}</span>
                    <div>
                        <BiUserCircle className='answeruserimage'/>
                        <Link to={`/user/${answer.userId}/profile`} className='answerusername'>{answer.userAnswered}</Link>
                    </div>
                </div>
            </div>
        
        </div>
        
    </div>
  )
}

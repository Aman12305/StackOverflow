import React,{useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import './AskQuestion.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { askQuestion } from '../../actions/question'

const TagsSuggestions = ({ searchTerm, onSuggestionClick }) => {
    
    const [suggestions, setSuggestions] = useState([]);

    const tags = ['c', 'css',  'express', 'firebase', 'html', 'java', 'javascript','mern','mongodb','mysql','next.js','node.js','php','python','reactjs']

    useEffect(() => {

        setSuggestions(
            tags.filter((suggestion) => suggestion.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      
    }, [searchTerm]);

    if(searchTerm==='')
    {
        return null;
    }
  
    const handleSuggestionClick = (suggestion) => {
      onSuggestionClick(suggestion);
    };
  
    return (
        
            suggestions.length!==0 &&
            <datalist id='suggestion' className='suggestionbox'>
                {suggestions.map((suggestion,idx) => (
                <option key={idx} onClick={() => handleSuggestionClick(suggestion)} className='suggestiondiv' value={suggestion}>{suggestion}</option>
                ))}
            </datalist>
    );
  };

export default function AskQuestion() {

    const [ questionTitle, setQuestionTitle ] = useState('')
    const [ questionBody, setQuestionBody ] = useState('')
    const [ questionTags, setQuestionTags ] = useState([])

    const [User, setUser] = useState(null);
    const user = useSelector(state=>state.currentUserReducer)

    useEffect(() => {
        // Try to get the user data from localStorage
        const userData = localStorage.getItem('Profile');
        if (userData) {
        // If the user data is present in localStorage, set the user state
        setUser(JSON.parse(userData));
        }
        else
        {
            alert('You must have to login first');
            navigate('/auth/login');
        }
    }, [user]);

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [tags,setTags] = useState('');

   const handleTags = (e) =>{
    setTags(e.target.value);
   }

   const handleSuggestionClick = (clickedtag) =>{
    setTags('');

    if(questionTags.length==5)
    {
        alert('You can add only 5 tags');
        return;
    }

    const containsElement = questionTags.filter((e) => e === clickedtag).length > 0;
    if(!containsElement)
    setQuestionTags([...questionTags,clickedtag])
   }

   const removeTag = (tag) =>{
    setQuestionTags(questionTags.filter(item => item!==tag))
   }

   const handleSubmit = (e) =>{
    e.preventDefault();

    if(questionTags.length==0)
    {
        alert('Questions must have atleast one tag');
        return;
    }
    if(questionBody.length<20)
    {
        alert('Please describe your problem with more than 20 words');
        return;
    }

    dispatch(askQuestion({questionBody,questionTitle,questionTags,userPosted:User.data.name.display},navigate)).then(data=>{
        if(data)
        console.log(data);
        else{
            alert('Questions uploaded sucessfully');
        }
    })

   }

  return (
    <div className="container">
        <div className="ask_container">
            <h1 className='ask_topcontainer'>Ask a Public Question</h1>
            <div className="ask_bottomcontainer">
                <form className='ask_form' onSubmit={handleSubmit}>
                    <div className="form_field">
                        <span className='form_label'>Title</span>
                        <p className='form_description'>Be specific and imagine you’re asking a question to another person.</p>
                        <input className='form_input' value={questionTitle} onChange={(e) => {setQuestionTitle(e.target.value)}} required></input>
                    </div>
                    <div className="form_field">
                        <span className='form_label'>Describe your problem</span>
                        <p className='form_description'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                        <textarea className='form_input' style={{height:"200px"}} value={questionBody} onChange={(e) => {setQuestionBody(e.target.value)}} required></textarea>
                    </div>
                    <div className="form_field">
                        <span className='form_label'>Tags</span>
                        <p className='form_description'>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                        <div className="form_multipletags">
                            {
                                questionTags.map((data,idx)=>(
                                    <span key={idx} className='form_tag'>
                                        <Link key={idx} to={`/questions/tagged/${data}`} >{data}</Link>
                                        <span className="form_tag_icon" onClick={()=>removeTag(data)}>&times;</span>
                                    </span>
                                ))
                            }
                        </div>
                        <input list='suggestions' className='form_input' value={tags} onChange={handleTags}></input>
                        <TagsSuggestions searchTerm={tags} onSuggestionClick={handleSuggestionClick}/>
                        
                    </div>
                    <button className='form_button'>Submit</button>
                </form>

            </div>
        </div>
    </div>
  )
}

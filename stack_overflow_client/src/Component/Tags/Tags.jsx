import React,{useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import './Tags.css'
import { alltags } from '../util'
import { Link } from 'react-router-dom'

export default function Tags() {

    const [suggestions,setSuggestions] = useState([]);

    const [inputtag,setInputTag] = useState('')

    const handleChange = (e) =>{
        setInputTag(e.target.value);
        setSuggestions(alltags.filter((item)=>(item.tagname.toLowerCase().includes(e.target.value.toLowerCase()))))
    }

  return (
    <div className="container">
        <div className="tag_topcontainer">
            <h2>Tags</h2>
            <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
            <div className="search_box">
                <FaSearch className='search_icon'/>
                <input type='text' placeholder="Filter by tag name" className='tagsearch_input' onChange={handleChange} value={inputtag}></input>
            </div>
        </div>
        <div className="tagbottom_container">
            {
                suggestions.length!==0?
                suggestions.map((tag,key)=>(
                    <span className="tag_container" key={key}>
                        <Link to={`/questions/tagged/${tag.tagname}`} className='tech_tag' >{tag.tagname}</Link>
                        <p className='tech_tag_description'>{tag.tagdescription.slice(0,180)}</p>
                        <span className='tech_tag_questions'>{tag.tagquestions} questions</span>
                     </span>
                )):
                (
                    inputtag===''?
                    alltags.map((tag,key)=>{
                        return (
                            <span className="tag_container" key={key}>
                                <Link to={`/questions/tagged/${tag.tagname}`} className='tech_tag' >{tag.tagname}</Link>
                                <p className='tech_tag_description'>{tag.tagdescription.slice(0,180)}</p>
                                <span className='tech_tag_questions'>{tag.tagquestions} questions</span>
                            </span>
                        )
                    }):
                    <h3 style={{margin:"10px",textAlign:"left",backgroundColor:"white",fontWeight:'300'}}>No result found</h3>
                )
                
            }
            
        </div>
    </div>
  )
}

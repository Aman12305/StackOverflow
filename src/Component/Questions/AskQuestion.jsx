import React,{useState} from 'react'
import './AskQuestion.css'
import '../../App.css'

export default function AskQuestion() {

    const [ questionTitle, setQuestionTitle ] = useState('')
    const [ questionBody, setQuestionBody ] = useState('')
    const [ questionTags, setQuestionTags ] = useState('')

    // const handleTagsclick = (e) =>{
    //     setQuestionTags(questionTags + ` ${e.target.value}`);
    // }

  return (
    <div className="container">
        <div className="ask_container">
            <h1 className='ask_topcontainer'>Ask a Public Question</h1>
            <div className="ask_bottomcontainer">
                <form className='ask_form'>
                    <div className="form_field">
                        <span className='form_label'>Title</span>
                        <p className='form_description'>Be specific and imagine you’re asking a question to another person.</p>
                        <input className='form_input' value={questionTitle} onChange={(e) => {setQuestionTitle(e.target.value)}}></input>
                    </div>
                    <div className="form_field">
                        <span className='form_label'>Describe your problem</span>
                        <p className='form_description'>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                        <textarea className='form_input' style={{height:"200px"}} value={questionBody} onChange={(e) => {setQuestionBody(e.target.value)}}></textarea>
                    </div>
                    <div className="form_field">
                        <span className='form_label'>Tags</span>
                        <p className='form_description'>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</p>
                        <input className='form_input' list="taglist"></input>
                        {/* <datalist  id="taglist">
                            <option value="Lotus" onClick={handleTagsclick}>Lotus</option>
                            <option value="Sun Flower" onClick={handleTagsclick}>Sun Flower</option>
                            <option value="MNC" onClick={handleTagsclick}>MNC</option>
                            <option value="DELL" onClick={handleTagsclick}>DELL</option>
                            <option value="LENOVO" onClick={handleTagsclick}>LENOVO</option>
                        </datalist> */}
                    </div>
                    <div className='form_button'>Submit</div>
                </form>

            </div>
        </div>
    </div>
  )
}

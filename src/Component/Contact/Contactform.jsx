import React from 'react'

export default function Contactform() {
  return (
    <div className="login_container">
        <form className="login_bottom  login_container_div">
            <span className="form_title">Contact Support</span>
            <div className='form_field'>
                <span className='form_label'>Your Email</span>
                <input type="email" className='form_input' ></input>
            </div>
            <div className='form_field'>
            <span className='form_label' style={{width:"100%"}}>Please describe your problem</span>
                <textarea type="textarea" className='form_input' ></textarea>
            </div>
            <div type="submit" className='form_button'>Submit</div>
        </form>
    </div>
  )
}

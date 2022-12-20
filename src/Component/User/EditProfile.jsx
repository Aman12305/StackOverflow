import React from 'react'
import {FaGithub, FaLink, FaTwitter } from 'react-icons/fa'

export default function EditProfile() {
  return (
    <div className='edit_profile'>
      <h2 style={{fontSize:"25px",fontWeight:"400"}}>Edit your profile</h2>
      <form>
        <span className='edit_title'>Public information</span>
        <div className="edit_public user_div">
          <div className="edit_public_div">
            <div className="form_field">
              <div className="form_label">Display Name</div>
              <input className='form_input'></input>
            </div>
            <div className="form_field">
              <div className="form_label">Location</div>
              <input className='form_input'></input>
            </div>
            <div className="form_field">
              <div className="form_label">Title</div>
              <input className='form_input'></input>
            </div>

          </div>
          <div className="form_field">
            <div className="form_label">About Me</div>
            <textarea className='form_input' style={{height:"200px"}}></textarea>
          </div>

        </div>
        <span className='edit_title'>Links</span>
        <div className="edit_links user_div">
          <div className="form_field">
            <div className="form_label">Website Link</div>
            <div className="form_input_icon">
              <FaLink style={{marginRight:"5px"}}/>
              <input className='form_input' style={{width:"calc(100% - 25px)",border:"none"}}></input>
            </div>
          </div>
          <div className="form_field">
            <div className="form_label">Github Link</div>
            <div className="form_input_icon">
              <FaGithub style={{marginRight:"5px"}}/>
              <input className='form_input' style={{width:"calc(100% - 25px)",border:"none"}}></input>
            </div>
          </div>
          <div className="form_field">
            <div className="form_label">Twitter Link</div>
            <div className="form_input_icon">
              <FaTwitter style={{marginRight:"5px"}}/>
              <input className='form_input' style={{width:"calc(100% - 25px)",border:"none"}}></input>
            </div>
          </div>
          
        </div>
        <span className='edit_title'>Private information <span style={{fontSize:"x-small"}}>Not shown publicly</span></span>
        <div className="edit_private user_div">
          <div className="form_field">
            <div className="form_label">Full name</div>
            <input className='form_input'></input>
          </div>
        </div>

        <button className='form_seconbutton'>Submit</button>

      </form>
      

    </div>
  )
}

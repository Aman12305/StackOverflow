import React,{useState,useEffect} from 'react'
import {FaGithub, FaLink, FaTwitter } from 'react-icons/fa'
import { updateFullProfile } from '../../actions/auth.js';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EditProfile() {

  const {id} = useParams();
  const User = useSelector(state => state.currentUserReducer);

  useEffect(()=>{

    const userData = localStorage.getItem('Profile');

    if(userData)
    {
      const userdata = JSON.parse(userData).data

      setFormData({
        ...form,
        displayname:userdata.name.display,
        privatename:userdata.name.private,
        location:userdata.location,
        website:userdata.link.website,
        github:userdata.link.github,
        twitter:userdata.link.twitter,
        about:userdata.about
      })
    }
  
  },[User])



  const [form,setFormData] = useState({
    displayname:'',
    privatename:'',
    location:'',
    website:'',
    github:'',
    twitter:'',
    about:''
  });


  const [inputimage,setInputimage] = useState('');
  const dispatch = useDispatch()


  const handleChange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    if(name!=='file')
    setFormData({...form,[name]:value});
    else{
      // let src = URL.createObjectURL(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setInputimage(reader.result);
        setFormData({...form,'image':reader.result});
      };
      // setInputimage(src);
      
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(updateFullProfile(id,form)).then(data=>{
      if(data)
      alert(data);
    })
  }


  return (
    <div className='edit_profile'>
      <h2 style={{fontSize:"25px",fontWeight:"400"}}>Edit your profile</h2>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data" >
        <span className='edit_title'>Public information</span>
        <div className="edit_public user_div">
          <div className="edit_public_div">
            <div className="form_field">
              <div className="form_label">Profile Pic</div>
              {
                inputimage!=='' &&
                <img src={inputimage} alt="user_pic" className='user_pic'></img>
              }
              {/* {
                inputimage!=='' &&
                <video width="200" height="200" controls >
                  <source src={inputimage} type="video/mp4"/>
                </video>

              } */}
              <input type="file" className='form_input' accept=".png, .jpg, .jpeg" name='file' onChange={handleChange}></input>
            </div>
            <div className="form_field">
              <div className="form_label">Display Name</div>
              <input className='form_input' required name="displayname" value={form.displayname} onChange={handleChange}></input>
            </div>
            <div className="form_field">
              <div className="form_label">Location</div>
              <input className='form_input' name="location" value={form.location} onChange={handleChange}></input>
            </div>
          </div>
          <div className="form_field">
            <div className="form_label">About Me</div>
            <textarea className='form_input' style={{height:"200px"}} name="about" value={form.about} onChange={handleChange}></textarea>
          </div>

        </div>
        <span className='edit_title'>Links</span>
        <div className="edit_links user_div">
          <div className="form_field">
            <div className="form_label">Website Link</div>
            <div className="form_input_icon">
              <FaLink style={{marginRight:"5px"}}/>
              <input className='form_input' style={{width:"calc(100% - 25px)",border:"none"}} name="website" value={form.website} onChange={handleChange}></input>
            </div>
          </div>
          <div className="form_field">
            <div className="form_label">Github Link</div>
            <div className="form_input_icon">
              <FaGithub style={{marginRight:"5px"}}/>
              <input className='form_input' style={{width:"calc(100% - 25px)",border:"none"}} name="github" value={form.github} onChange={handleChange}></input>
            </div>
          </div>
          <div className="form_field">
            <div className="form_label">Twitter Link</div>
            <div className="form_input_icon">
              <FaTwitter style={{marginRight:"5px"}}/>
              <input className='form_input' style={{width:"calc(100% - 25px)",border:"none"}} name="twitter" value={form.twitter} onChange={handleChange}></input>
            </div>
          </div>
          
        </div>
        <span className='edit_title'>Private information <span style={{fontSize:"x-small"}}>Not shown publicly</span></span>
        <div className="edit_private user_div">
          <div className="form_field">
            <div className="form_label">Full name</div>
            <input className='form_input' required name="privatename" value={form.privatename} onChange={handleChange}></input>
          </div>
        </div>

        <button className='form_seconbutton' type="submit">Submit</button>

      </form>
      

    </div>
  )
}

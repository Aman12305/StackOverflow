import React,{useState} from 'react'
import {FaGoogle, FaGithub, FaFacebook} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../actions/auth'


export default function Login() {

    const [error,setError] = useState('');
    const [form,setForm] = useState({
        email:'',
        password:''
    });

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login(form, navigate)).then((data)=>{
            if(data)
            {
                setError(data.message)
            }
        })
    }

    const handleChange = (e) =>{
        setForm({...form,[e.target.name]:e.target.value})
    }

  return (
    <div className="login_container">
        <div className="login_top login_container_div">
            <div className="login_thirdparty">
                <FaGoogle className="login_thirdparty_icon"/>
                Log in with Google
            </div>
            <div className="login_thirdparty">
                <FaGithub className="login_thirdparty_icon"/>
                Log in with Github
            </div>
            <div className="login_thirdparty">
                <FaFacebook className="login_thirdparty_icon"/>
                Log in with Facebook
            </div>
        </div>
        {
            error!=='' &&
            <div id="login" className="error">
                <span>{error}</span>
            </div>
        }
        <form className="login_bottom  login_container_div" onSubmit={handleSubmit}>
            <div className='form_field'>
                <span className='form_label'>Email</span>
                <input type="email" className='form_input' name='email' onChange={handleChange}></input>
            </div>
            <div className='form_field'>
                <span className='form_forgot_label'>
                    <span className='form_label' style={{width:"48%"}}>Password</span>
                    <span className='form_label form_forgot' style={{width:"48%"}}>Forgot Password?</span>
                </span>
                
                <input className='form_input' name="password" onChange={handleChange}></input>
            </div>
            <button type="submit" className='form_button'>Login</button>
        </form>
    </div>
  )
}

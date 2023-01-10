import React from 'react'
import Home from './Home/Home'
import Navbar_ad from './Navbar/Navbar_ad';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Questions from './Questions/Questions';
import Auth from './Auth/Auth'
import Contact from './Contact/Contact';
import Login from './Auth/Login';
import Signin from './Auth/Signin'
import Footer from './Footer/Footer';
import Tags from './Tags/Tags';
import AskQuestion from './Questions/AskQuestion';
import User from './User/User';
import EditProfile from './User/EditProfile';
import UserProfile from './User/UserProfile';
import UserList from './User/UserList';
import QuestionsDetail from './Questions/QuestionsDetail';
import About from './About/About';

export default function () {
  return (
    <div>
        <Router>
            <Navbar_ad/>
            <div className='top'></div>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/auth' element={<Auth/>}>
                <Route path='login' element={<Login/>}/>
                <Route path='signin' element={<Signin/>}/>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/tags' element={<Tags/>}/>
            <Route path={'/questions'} element={<Questions/>}>
                <Route path={'tagged/:id'} element={<Questions/>}/>
            </Route>
            <Route path='/questions/:id' element={<QuestionsDetail/>}/>
            <Route path='/questions/ask' element={<AskQuestion/>}/>
            <Route path='/user' element={<UserList/>}/>
            <Route path='/user/:id' element={<User/>}>
                <Route path='edit' element={<EditProfile/>}/>
                <Route path='profile' element={<UserProfile/>}/>
            </Route>
            <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
    </div>

  )
}

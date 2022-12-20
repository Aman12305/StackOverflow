import './App.css';
import Home from './Component/Home/Home'
import Navbar_ad from './Component/Navbar/Navbar_ad';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Questions from './Component/Questions/Questions';
import Auth from './Component/Auth/Auth'
import Contact from './Component/Contact/Contact';
import Login from './Component/Auth/Login';
import Signin from './Component/Auth/Signin'
import Footer from './Component/Footer/Footer';
import Tags from './Component/Tags/Tags';
import AskQuestion from './Component/Questions/AskQuestion';
import User from './Component/User/User';
import EditProfile from './Component/User/EditProfile';
import UserProfile from './Component/User/UserProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar_ad/>
        <div className='top'></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='signin' element={<Signin/>}/>
          </Route>
          <Route path='/tags' element={<Tags/>}/>
          <Route path={'/questions'} element={<Questions/>}>
            <Route path='ask' element={<AskQuestion/>}/>
            <Route path={'tagged/:questiontag'} element={<Questions/>}/>
          </Route>
          <Route path='/user' element={<User/>}>
            <Route path='edit' element={<EditProfile/>}/>
            <Route path='profile' element={<UserProfile/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

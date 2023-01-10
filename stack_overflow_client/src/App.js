import './App.css';
import React ,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAllUsers} from './actions/users';
import {fetchAllQuestions} from './actions/question'
import AllRoutes from './Component/AllRoutes';


function App() {

  const dispatch = useDispatch();
  const [loading,setLoading]  = useState(true);

  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  },[dispatch]);

  const user = useSelector(state => state.currentUserReducer);
  const [User,setUser] = useState(null);

  useEffect(()=>{
    const use = localStorage.getItem('Profile');

    if(use)
    {
      setUser(use);
    }

  },[dispatch,localStorage,user])


  return (
    <div className="App">
      {
        <AllRoutes/>
      }
    </div>
  );
}

export default App;

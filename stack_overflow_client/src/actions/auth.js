import * as api from '../api'
import { setCurrentUser } from './currentUser'
import { fetchAllUsers } from './users'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data:data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile')) ))
        dispatch(fetchAllUsers());
        navigate('/')
    } catch (error) {
        if(error.response)
        {
            return error.response.data
        }
        else
        return error
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data:data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    } catch (error) {
        if(error.response)
        {
            return error.response.data
        }
        else
        return error
    }
}

export const updateFullProfile = (id,updatedata) =>async(dispatch)=>{
    try{
        const { data } = await api.updateProfile(id, updatedata)
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data })
        dispatch({ type: 'AUTH', data:data})
        dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
        return 'Profile get updated Sucessfully'
    }
    catch(error)
    {
        if(error.response)
        {
            return error.response.data
        }
        else
        return error
    }
    
}

export const logOut = () => async(dispatch) =>{
    try{
        dispatch({type:'LOGOUT',data:null})
        dispatch(setCurrentUser(null));
    }
    catch(error){
        console.log(error);
    }
}
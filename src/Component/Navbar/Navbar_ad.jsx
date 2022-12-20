import React,{useState,useEffect} from 'react'
import './Navbar_ad.css'
import { FaArrowLeft, FaBars, FaSearch, FaUserCircle, FaYoutube} from 'react-icons/fa'
import {ImCancelCircle} from 'react-icons/im'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { useWindowSize,scrollToElement } from '../action';
import { Link } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import Searchsuggestion from './Searchsuggestion'
import Righttogglercontent from './Rightcontent'

export default function Navbar_ad() {

    // variable which stores width and length of window
    const [size,setSize] = useState([0,0]); 

    // inputdisplay=='' (search box at his first position), 'search530' (only search icon) , 'searchmobileview' (search box covers full width in mobile view)
    const [inputdisplay,setInputdisplay] = useState(""); 

    //navdisplay=true (searchbox,lefttoggler,login,righttoggler==display true otherwise display false)
    const [navdisplay,setNavdisplay] = useState(true); 

    // user feeded value in search input field
    const [inputValue,setinputValue] = useState("");

    //left toggle icon =='' (faBars), "cancel" (imcancel) , otherwise 'leftarrow'
    const [lefttoggleicon,setlefttoggleicon] = useState(''); 

    //left right icon =='' (threedots), "cancel" (imcancel) 
    const [righttoggleicon,setrighttoggleicon] = useState(''); 

    // function which changes state of size variable
    useWindowSize(size,setSize); 

    //To get responsive feature for Navbar components 
    useEffect(()=>{
        if(size[0]>530)
        {
            setInputdisplay(""); 
            setNavdisplay(true); 
            setlefttoggleicon('');
        }
        else if(inputdisplay==='')
        {
            setinputValue('');
            setInputdisplay("search530")
        }
        else if(inputdisplay==='searchmobileview')
        {
            setlefttoggleicon('lefttoggler_icon');
        }

    },[size[0],inputdisplay]);



 // function to handle submit button of input bar (searchicon)
    const handleSearch = (e) =>{
        if(inputdisplay!=='search530')
        {
            console.log('search icon pressed',inputValue);
            setlefttoggleicon('');
            setinputValue('');
            setInputdisplay('search530');
            setNavdisplay(true);

        }
        else 
        {
            setNavdisplay(false);
            setlefttoggleicon('lefttoggler_icon');
            setInputdisplay('searchmobileview');
        }
    }

    // function for handling changing input value of input search field
    const handleinputChange = (e) =>{
        setinputValue(e.target.value);

         //only one pop up at a time whether it is lefttoggler popup,search suggestion pop up, right toggler pop up
        if(righttoggleicon!=='')
        {
            setrighttoggleicon('');
        }
       
    }

    //function to handle press on left toggler icon
    const handlelefttoggler = () =>{
        if(lefttoggleicon==='')
        {
            setlefttoggleicon('cancel');
        }
        else if(lefttoggleicon==='lefttoggler_icon' || lefttoggleicon==='cancel'){
            setlefttoggleicon('');
            setinputValue('');
            if(inputdisplay==='searchmobileview')
            {
                setInputdisplay('search530');
                setNavdisplay(true);
            }
        }

    }

    //function to handle click on right toggler icon
    const handlerightToggler = () =>{
        if(righttoggleicon==='')
        {
            setrighttoggleicon('cancel');
        }
        else
        {
            setrighttoggleicon('');
        }

        //only one pop up at a time whether it is lefttoggler popup,search suggestion pop up, right toggler pop up
        if(inputValue!=='')
        {
            setinputValue('');
        }
    }

    //function to handle click on right toggler content div
    const handleRighttogglecontent = ()=>{
        setrighttoggleicon('');
    }

  return (
    <div className='topnav'>
        {
            (size[0]<=630) &&
            <div className="lefttoggler" onClick={handlelefttoggler}>

            {
                lefttoggleicon===''?(<FaBars className='lefttoggler_icon'/>):
                (lefttoggleicon==='lefttoggler_icon'?(<FaArrowLeft className='lefttoggler_icon'/>):
                (lefttoggleicon==='cancel'?(<ImCancelCircle className='lefttoggler_icon'/>):("")))
                
            }

            </div>

        }

        {
            navdisplay &&
            <>
                {
                    (lefttoggleicon==='cancel' || size[0]>630) && <LeftSidebar setdisplay={setlefttoggleicon}/>
                }
                
                <Link to='/'>
                    <div className="brand">
                        <FaYoutube className='brand_icon'/>
                        <span className='brand_name'>Youtube</span>
                    </div>
                </Link>
                <Link to='/auth/signin'>
                    <div className="login">
                        <FaUserCircle className='login_icon'/>
                        <span>Sign in</span>
                    </div>
                </Link>
                <div className="righttoggler" onClick={handlerightToggler}>
                    {
                        righttoggleicon===''?(<BsThreeDotsVertical className='righttoggler_icon'/>):
                        (<ImCancelCircle className='righttoggler_icon'/>)
                    }
                </div>
            </>

        }
        
        <div className={`search ${inputdisplay}`}>
            <input type='search' className={`search_input ${inputdisplay==='search530'?('displaynone'):("")}`} placeholder='Search...' value={inputValue||""} onChange={handleinputChange} />
            <span className='search_iconbox' onClick={handleSearch}>
                <FaSearch className='search_icon'/>
            </span>
        </div>
        {
            inputValue!=='' && 
            <Searchsuggestion input={inputValue} setinput={setinputValue} handleClick={handleSearch} inputdisplay={inputdisplay}/>
        }
        
        {navdisplay && righttoggleicon==='cancel' && 
            <Righttogglercontent handleRighttogglecontent={handleRighttogglecontent} 
        />}
    </div>
  )
}

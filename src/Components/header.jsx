import { useState,useEffect } from 'react';
import SearchIcon from '../images/video_search.svg'
import LongMenu from './sidedropdown.jsx'

export default function Header() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update screenWidth state
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to window resize event
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, [window.innerWidth]); // Empty dependency array ensures that this effect runs only once after component mount

  useEffect(() => {
    if (screenWidth<=1250){
        document.getElementById("navsearch").style.display="none";
        document.getElementById("navLogin").style.display="none";
        document.getElementById("navSignup").style.display="none";
        document.getElementById("LongMenu").style.display="block";
    }
    else if (screenWidth>1250){
        document.getElementById("LongMenu").style.display="none";
        document.getElementById("navsearch").style.display="flex";
        document.getElementById("navLogin").style.display="flex";
        document.getElementById("navSignup").style.display="flex";
    }
    }, [screenWidth]);

  return (
    <>
    <nav id="navbar" className='bor container'>
        <div id="navTitle" className='bor flex justify-center items-center'>
            <span>Motion.</span>
        </div>
        <div id="navAnchores" className='bor flex'>
            <div className='bor flex justify-center items-center subnavAnchores'>
                <a href="">Home</a>
            </div>
            <div className='bor flex justify-center items-center subnavAnchores'>
                <a href="">Catalog</a>
            </div>
            <div className='bor flex justify-center items-center subnavAnchores'>
                <a href="">News</a>
            </div>
            <div className='bor flex justify-center items-center subnavAnchores'>
                <a href="">Collections</a>
            </div>
        </div>
        <div id="navsearch" className='bor flex navSearch'>
                <div className='bor flex justify-center items-center navSearchSub'><img src={SearchIcon} alt="SearchIcon"/></div>
                <div className='bor flex justify-center items-center navSearchSub'><input type="text" name="" id="" placeholder='Search'/></div>
        </div>
        <div id="navLogin" className='bor flex justify-center items-center'>
            <button>Log In</button>
        </div>
        <div id="navSignup" className='bor flex justify-center items-center'><button>Get Started</button></div>
        <div id="LongMenu" className='bor flex justify-end items-end'>
           <LongMenu></LongMenu>
        </div>
    </nav>
    </>
  )
}

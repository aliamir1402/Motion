import React from 'react'
import SearchIcon from '../images/video_search.svg'

export default function Header() {
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
        <div className='bor flex navSearch'>
            <div className='bor flex justify-center items-center navSearchSub'><img src={SearchIcon} alt="SearchIcon"/></div>
            <div className='bor flex justify-center items-center navSearchSub'><input type="text" name="" id="" placeholder='Search'/></div>
        </div>
        <div id="navLogin" className='bor flex justify-center items-center'>
            <button>Log In</button>
        </div>
        <div id="navSignup" className='bor flex justify-center items-center'><button>Get Started</button></div>
    </nav>
    <div id="horDivider"></div>
    </>
  )
}

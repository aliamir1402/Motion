import React from 'react' 
import DiscordIcon from "../images/icons8-discord.svg"
import InstagramIcon from "../images/icons8-instagram.svg"
import YoutubeIcon from "../images/icons8-youtube.svg"
import TelegramIcon from '../images/icons8-telegram.svg'

export default function footer() { 
  
  return (
    <>
    <div id="horDivider"></div>
  <footer id="footer" className="container">
    <div className="footer-sub-1 item flex p-4">
      <div className='flex justify-center items-center ml-4 mr-4'>
        <a  className='text-white' href="">motion.com</a>
      </div>
      <div className='flex justify-center items-center ml-4 mr-4'>
        <a href="">Terms & Privacy</a>
      </div>
      <div className='flex justify-center items-center ml-4 mr-4'>
        <a href="">Contacts</a>
      </div>
    </div>
    <div className="footer-sub-1 flex justify-end items-end pb-1.5">
      <div className='ml-1 mr-1'><button><img src={TelegramIcon} alt="Telegram" height={30}width={30}/></button></div>
      <div className='ml-1 mr-1'><button><img src={DiscordIcon} alt="Discord" height={30}width={30}/></button></div>
      <div className='ml-1 mr-1'><button><img src={YoutubeIcon} alt="Youtube" height={30}width={30}/></button></div>
      <div className='ml-1 mr-1'><button><img src={InstagramIcon} alt="Instagram" height={30}width={30}/></button></div>
    </div>
  </footer>
  </>
  ) }
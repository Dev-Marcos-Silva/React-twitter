import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle} from 'phosphor-react'

import twitterlogo from '../assets/logo-twitter.svg';

import './Sidebar.css';

export default function Sidebar(){
  return(
      <aside className="sidebar">
        <img className="logo" src={twitterlogo} alt="logo"/>
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill"/>
            Home</a>
          
          <a href="">
            <Hash/>
            Explore</a>
  
          <a href="">
            <Bell/>
            Notifications</a>
  
          <a href="">
            <Envelope/>
            Messages</a>
          
          <a href="">
            <BookmarkSimple/>
            Bookmarks</a>
          
          <a href="">
            <FileText/>
            List</a>
          
          <a href="">
            <User/>
            Profile</a>
          
          <a href="">
            <DotsThreeCircle/>
            More</a>

        </nav>
        <button className="new-tweet"type="button">tweet</button>
      </aside>
  )
}
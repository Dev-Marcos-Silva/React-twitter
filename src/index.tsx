import React from 'react'
import ReactDOM from 'react-dom/client'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from 'phosphor-react'

import './global.css'

import twitterlogo from './assets/logo-twitter.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
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
      
      <div className="content">
        <main className="TimeLine">         
         <div className="TimeLine-header">
           Home
           <Sparkle/>
         </div>
          
        <form className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Dev-Marcos-Silva.png" alt="Marcos Silva"/>
            <textarea id="tweet" placeholder="What's happening?"/>
          </label>
          
          <button type="submit">Tweet</button>
        </form>             
        </main>
      </div>
    </div>
      
  </React.StrictMode>
)

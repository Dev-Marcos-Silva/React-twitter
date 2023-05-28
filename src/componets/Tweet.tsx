import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';

import './Tweet.css';

import { Link } from 'react-router-dom'

interface TweetProps{
  content: string
}

export default function Tweet (props: TweetProps){
  return(
    <Link to="/Status" className="tweet">
     <img src="https://github.com/Dev-Marcos-Silva.png" alt="Marcos silva"/>

      <div className="tweet-content">
        
         <div className="tweet-content-header">
           <strong>Marcos Silva</strong>
           <span>@Marcosilva</span>
         </div>
            <p>
              {props.content}
            </p>

           <div className="tweet-content-footer">

             <button type="submit">
               <ChatCircle/>
                20
               
             </button>
             <button type="submit">
               <ArrowsClockwise/>
                20
               
             </button>
             <button type="submit">
               <Heart/>
                20
               
             </button>

           </div>
        
      </div>
    </Link>
  )
}
import { FormEvent, KeyboardEvent, useState } from "react"

import Header from '../componets/Header';

import Separator from '../componets/Separator';

import Tweet from '../componets/Tweet';

import'./Timeline.css'

export default function Timeline() {
const [newTweet, setNewTweet] = useState('')
const [tweets, setTweets] = useState(
 [
  'Meu primeiro tweets',
  'Boa noiteeee',
  'Esta funcionando oooooo'
 ]
)
  function createNewTweet(event: FormEvent) { 
     event.preventDefault() 
  
     setTweets([newTweet, ...tweets]) 
     setNewTweet('')
  } 
    function handleHotKeySubmit(event: KeyboardEvent) {
     if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet, ...tweets]) 
      setNewTweet('')
     }
    
    }
  
  return(         
    <main className="TimeLine"> 

        <Header title="Home"/>
              
        <form onSubmit={createNewTweet} className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Dev-Marcos-Silva.png" alt="Marcos Silva"/>
            <textarea 
              id="tweet"
              placeholder="What's happening?"
              value={newTweet}
              onKeyDown={handleHotKeySubmit}
              onChange={(event)=>{
               setNewTweet(event.target.value)}}
                
              />      
          </label>
          
          <button type="submit">Tweet</button>
        </form> 

           <Separator />
           
          {tweets.map(tweet => {
             return <Tweet key={tweet} content={tweet} />
    
            })}
          
    </main>
    
    )
}

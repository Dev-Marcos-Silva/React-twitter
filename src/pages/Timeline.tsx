import Header from '../componets/Header';

import Separator from '../componets/Separator';

import Tweet from '../componets/Tweet';

const tweets = [
  'Meu primeiro tweets',
  'Boa noiteeee',
  'Esta funcionando oooooo'
]

import'./Timeline.css'

export default function Timeline() {
  return(         
    <main className="TimeLine"> 

        <Header title="Home"/>
              
        <form className="new-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Dev-Marcos-Silva.png" alt="Marcos Silva"/>
            <textarea id="tweet" placeholder="What's happening?"/>
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

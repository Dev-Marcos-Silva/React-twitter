import Header from '../componets/Header';
import Separator from '../componets/Separator';
import Tweet from '../componets/Tweet';
import { PaperPlaneRight } from 'phosphor-react'
import { useState, KeyboardEvent, FormEvent } from 'react'
import './Status.css'

export default function Status(){
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState(
 [
  'Concordo',
  'Olha, faz sentido ',
  'Parabens pelo progresso' 
 ]
)
  function createNewAnswer(event: FormEvent) { 
     event.preventDefault() 
  
     setAnswers([newAnswer, ...answers]) 
     setNewAnswer('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
     if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
     setAnswers([newAnswer, ...answers]) 
     setNewAnswer('')
    }
  }
  
   return(
    <main className="status"> 

        <Header title="Tweet"/>

        <Tweet content="Conheça a área de transferência do Gboard: qualquer texto copiado por você será salvo aqui.Toque em um clipe para colá-lo na caixa de texto."/>
      
      <Separator />    
      
        <form onSubmit={createNewAnswer} className="answer-tweet-form">
          <label htmlFor="tweet">
            <img src="https://github.com/Dev-Marcos-Silva.png" alt="Marcos Silva"/>
            <textarea 
              id="tweet" 
              placeholder="Tweet your answer" 
              value={newAnswer}
              onKeyDown={handleHotKeySubmit}
              onChange={(event) => {
               setNewAnswer(event.target.value)
              }}/>
              
          </label>
          
          <button type="submit">
           <PaperPlaneRight/>
            <span>Answer</span>
          </button>
        </form> 

           
           
      {answers.map(answer => {
             return <Tweet key={answer} content={answer} /> })}  
   </main>
   )
}

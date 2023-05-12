import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';

import './Tweet.css';

export default function Tweet (){
  return(
    <a href="#" className="tweet">
     <img src="https://github.com/Dev-Marcos-Silva.png" alt="Marcos silva"/>

      <div className="tweet-content">
        
         <div className="tweet-content-header">
           <strong>Marcos Silva</strong>
           <span>@Marcosilva</span>
         </div>
            <p>
              Para fixar um clipe, toque nele e mantenha-o pressionado. <br/>
              <br/>
              Os clipes desafixados serão excluídos após uma hora.<br/>
              <br/>
              Use o ícone de edição para fixar, adicionar ou excluir clipes.
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
    </a>
  )
}
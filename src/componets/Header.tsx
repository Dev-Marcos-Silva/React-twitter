import { Sparkle } from 'phosphor-react'

import './Header.css'

interface HeaderProps{
  title: string;
}

export default function Header(props: HeaderProps){
  return(
    <div className="TimeLine-header">
       {props.title}
       <Sparkle/>
    </div>
  )
}
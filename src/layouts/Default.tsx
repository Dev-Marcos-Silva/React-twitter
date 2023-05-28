import Sidebar from '../componets/Sidebar';
import { Outlet} from 'react-router-dom';

import './Default.css'

export default function Default() {
   return(
     <div className="layout">
      
      <Sidebar/>      
      
      <div className="content">
        <Outlet/>
      </div>
    </div>
   )
}

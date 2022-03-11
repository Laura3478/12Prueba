
import {SideBarMenu} from "./components/SideBarMenu"
import { HashRouter as Router, Route } from 'react-router-dom'
import Ayuda from "./Pages/Ayuda";
import {FcLike} from 'react-icons/fc';
import { MdPets, MdRoom, MdHome, MdOutlineShoppingCart, MdSettings, MdOutlineSpa} from "react-icons/md";
import { BiCalendarHeart } from "react-icons/bi";
import foto from './photo.avif';
import { SideBarMenuCard, SideBarMenuItem } from "./Types/types";


export function App() {

  const items:SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Home',
      icon: MdHome,
      path: "./Pages/Home" ,
    },
    {
      id: '2',
      label: 'Mascotas',
      icon: MdPets,
      path: "/Mascotas",
    },
    {
      id: '3',
      label: 'Ayuda un amigo',
      icon: FcLike,
      path: "/Ayuda",
    },
    {
      id: '4',
      label: 'GeoPet',
      icon: MdRoom,
      path: "/GeoPet",
    },
    {
      id: '5',
      label: ' Calendario',
      icon: BiCalendarHeart,
      path: "/Calendario",
    },
    {
      id: '6',
      label: ' Spa',
      icon: MdOutlineSpa,
      path: "/Spa",
    },
    
    {
      id: '7',
      label: 'Tienda',
      icon: MdOutlineShoppingCart,
      path: "/Tienda",
    },
    {
      id: '8',
      label: 'Configuración',
      icon: MdSettings,
      path: "/Config",
    }
  ];
  
 const card:SideBarMenuCard = {
    id:'card01',
    displayName:'Laura Zamora',
    title: 'PetLOve',
    photoUrl: foto,
    url: "/",
  };



  return (
    <Router>
    <div className="flex"> 
      <SideBarMenu items={items} card={card}/>

        <div className="content">

        
        <Route path="/Pages" component={Ayuda} exact></Route>
       
        
        </div>
      
    </div>
    </Router>
  );
}

export default App;

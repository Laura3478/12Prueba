import { useState } from "react";
import { SideBarMenuCard, SideBarMenuItem } from "../Types/types";
import {classNames} from "../util/classes";
import { GiHamburgerMenu } from "react-icons/gi";


import SideBarMenuCardView from "./SideBarMenuCardView";
import SideBarMenuItemView from "./SideBarMenuItemView";

import "./SideBarMenu.scss";

interface SideBarMenuProps {
    items: SideBarMenuItem[];
    card: SideBarMenuCard;
}





export function SideBarMenu({items, card}: SideBarMenuProps) {
 
 const [isOpen, setIsOpen] = useState<boolean>(true);


 function handleClick() {
     setIsOpen(!isOpen);
 }
 
    return (
    <div className={classNames('SideBarMenu', isOpen ? "expanded" : "collapsed")}>

        <div className="menuButton">
            <button className="hamburgerButton" onClick={handleClick}>
                <GiHamburgerMenu size={25} />
            </button>
        </div>

        <SideBarMenuCardView card={card} isOpen={isOpen}/>
        {
            items.map(item =>(
                <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen}/>
            ))
        }

    </div>
  )
}

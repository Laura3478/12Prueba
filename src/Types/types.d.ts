import { IconType } from "react-icons";
import { UrlObject } from "url";

export interface SideBarMenuItem{
    id: string;
    label: string;
    icon: IconType;
    path: string;
}


export interface SideBarMenuCard{
    id:string;
    displayName: string;
    photoUrl: string;
    title: string;
    url: string;
}


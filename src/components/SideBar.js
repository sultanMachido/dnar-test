import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { MenuIcon,ChartBarIcon } from "@heroicons/react/solid";

const SideBar=(props)=>{
    let stylesA
    let stylesB
    let mlA
    let mlB
    if (props.url === '/') {
       stylesA =  "pt-2 rounded-lg w-8 mx-auto h-8 bg-icon mb-4";
       mlA = ""
       mlB ="ml-3"
    }else{
        stylesB =  "pt-2 rounded-lg w-8 mx-auto h-8 bg-icon mb-4 "
        mlA = "ml-3"
        mlB =""
    }
    return(
    <div className="pt-4">
       <div className={`${stylesA}`||"pt-2   bg-icon "}>
           <Link to="/"><MenuIcon className={`h-4 w-8 text-white mb-3 ${mlA}`}/></Link>
       </div>
       <div  className={`${stylesB}`||"pt-2   bg-icon "}>
           <Link to='pagetwo'> <ChartBarIcon className={`h-4 w-8 text-white mb-3 ${mlB}`} /></Link>
       </div>
    </div>
    )
}


export default SideBar

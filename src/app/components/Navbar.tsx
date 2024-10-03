"use client"
import React,{useState} from "react";
import Link from "next/link";
import NavLink from "./NavLink"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from "./MenuOverlay";



const NavLinks = [
    {
        title:"Home",
        path:"#Home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title:"Contact",
        path:"#contact"
    }
];

const Navbar= () => {
    const [navbarOpen, setNavbarOpen]=useState(false);
    return(
        <nav className="fixed top-0 right-0 left-0 z-10 flex justify-between flex-wrap mx-auto p-8 bg-[#121212] bg-opacity-100 px-4 py-8">
          <div className="flex flex-wrap items-center justify-be justify-between px-4 py-2 mx-auto">
                <Link href={"/"} className="text-pink-400 font-bold text-2xl">Portfolio.</Link></div>
            
           
        
           
          <div className="mobile-menu block md:hidden">
            {
                !navbarOpen? (
                    <button onClick={()=>setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200">
                        <Bars3Icon className="h-5 w-5"/></button>
                ):(
                    <button onClick={()=>setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white  text-slate-200">
                        <XMarkIcon className="h-5 w-5"/></button>
                )
            }

          </div>
        <ul className="flex p-4 md:flex-row md:space-x-8 pr-4 text-2xl py-2 pl-3  text-orange-400 font-bold sm:text-xl rounded md:p-0 ">
            {NavLinks.map((link,index)=>(
                 <li key={index}>
                 <NavLink href={link.path} title={link.title}/>
             </li>
 
            ))}
           
        </ul>
        {navbarOpen? <MenuOverlay links={NavLinks}/>:null}
        
        
    </nav>
    
    )
}

export default Navbar;
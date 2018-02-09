import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton';

const Layout = (props) => {
 return(
   <div className="row">
     <h1 className="page-title text-center"> Jane Jupiter, Developer </h1>
     <div className="top-bar">
       <div className="top-bar-left">
         <ul className="menu">
           <li className="menu-text">Menu</li>
           <li><BackButton /></li>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/resume'>Jane's Resume</Link></li>
           <li><Link to='/projects'>Jane's Projects</Link></li>
         </ul>
       </div>
     </div>
     <div className="row">
       {props.children}
     </div>
   </div>
 )
}

export default Layout;

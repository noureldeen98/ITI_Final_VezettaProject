import React from 'react';
import {Link} from 'react-router-dom'
import style from './navbar.module.css';
import egyptPic from '../../../Images/cities/Egypt.jpg';
import logoPic from '../../../Images/cities/logo.jpg';
import CitiesListComponent from '../../ui/CitiesListComponent';
//

// https://github.com/noureldeen98/ITI_Final_VezettaProject/tree/master/src
export default function NavbarComponent() {
return <div style={{'width': '100%', 'overflowX': 'hidden'}} className='row g-0'>
    <nav className={`navbar navbar-expand-lg ${style.nav}`} >
        <div className="container" id="navBar">
            <button className={`navbar-toggler ${style['navbar-toggler']}`} 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" aria-controls="navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" 
            id={`${style['navbarNavDropdown']}`}>
            <ul className="navbar-nav navbar-right">
                <li className={`${style['nav-item']} dropdown`}>
                    <a className="nav-link dropdown-toggle" href="#" 
                    id="navbarDropdownMenuLink" role="button" 
                    data-bs-toggle="dropdown">
                        <img src={egyptPic} className="img-fluid" alt=""/>
                        <span>مصر</span>    
                    </a>
                    <CitiesListComponent />
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="#"> English &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="/Contactus">اتصل بينا&nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="#">فيزيتا للاطباء &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="/Signin">دخول &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link active" to="/Signup">انضم الان</Link>
                </li>
            </ul>
        </div>
        {/* style="{{margin-left: -8em;}}" */}
        <a className={`${style['navbar-brand']}`} href="#" >
            <img src={logoPic} className="img-fluid" 
            alt="vezeeta logo"/>
        </a>
    </div>
</nav>
</div>;
}

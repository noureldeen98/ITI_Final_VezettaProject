import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import style from './navbar.module.css';
import egyptPic from '../../../Images/cities/Egypt.jpg';
import logoPic from '../../../Images/cities/logo.jpg';
import CitiesListComponent from '../../ui/CitiesListComponent';
//for localize
import { langContext } from '../../../Context/LangContext';
// https://github.com/noureldeen98/ITI_Final_VezettaProject/tree/master/src
export default function NavbarComponent() {
    const {lang, setLang} = useContext(langContext)
    const updateLang = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        setLang(newLang)
    }
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
                        <span>{lang=='en'? 'مصر' : 'Egypt'}</span>    
                    </a>
                    <CitiesListComponent />
                </li>
                <li className={`${style['nav-item']}`} onClick={updateLang}>
                    <Link className="nav-link text-light" to="#"> {lang} &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="/Contactus">
                    {lang=='en'? 'اتصل بينا' : 'Contact us'}&nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="#">
                    {lang=='en'? 'فيزيتا للاطباء' : 'vezeeta for doctor'} &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="/Signin">
                    {lang=='en'? 'دخول' : 'login'} &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link active" to="/Signup"> 
                    {lang=='en'? 'انضم الان' : 'sign up'}
                    </Link>
                </li>
            </ul>
        </div>
        {/* style="{{margin-left: -8em;}}" */}
        <Link className={`${style['navbar-brand']}`} to="/home" >
            <img src={logoPic} className="img-fluid" 
            alt="vezeeta logo"/>
        </Link>
    </div>
</nav>
</div>;
}

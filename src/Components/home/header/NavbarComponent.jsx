import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import style from './navbar.module.css';
import egyptPic from '../../../Images/cities/Egypt.jpg';
import logoPic from '../../../Images/cities/logo.jpg';
import CitiesListComponent from '../../ui/CitiesListComponent';
//for localize
import { langContext } from '../../../Context/LangContext';
import { useTranslation } from 'react-i18next';
// https://github.com/noureldeen98/ITI_Final_VezettaProject/tree/master/src
export default function NavbarComponent() {
    const {lang, setLang} = useContext(langContext)
    const [t, i18n] = useTranslation();

    const updateLang = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang)
        setLang(newLang)
    }
    //localiation
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
                        <span>{t('header.country')}</span>    
                    </a>
                    <CitiesListComponent />
                </li>
                <li className={`${style['nav-item']}`} onClick={updateLang}>
                    <Link className="nav-link text-light" to="#"> {lang} &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="/Contactus">
                    {t('header.contact')}&nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="#">
                    {t('header.vezeeta')} &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link" to="/Signin">
                    {t('header.login')} &nbsp; |</Link>
                </li>
                <li className={`${style['nav-item']}`}>
                    <Link className="nav-link active" to="/Signup"> 
                    {t('header.sign')}
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

import React from 'react';
import style from'./citieslist.module.css';
import saudiPic from '../../Images/cities/Saudi.jpg';
import egyptPic from '../../Images/cities/Egypt.jpg';
import jordanPic from '../../Images/cities/Jordan.jpg';
import kenyaPic from '../../Images/cities/Kenya.jpg';
import lebnanPic from '../../Images/cities/Lebanon.jpg';
import nigeriaPic from '../../Images/cities/Nigeria.jpg';
import { useContext } from 'react';
import { langContext } from '../../Context/LangContext';


export default function CitiesListComponent() {
    const {lang, setLang} = useContext(langContext);
    return <>
        <ul className="dropdown-menu text-end">
            <li> <a className={`${style['dropdown-item']}`} href="#">
                    <img src={saudiPic} className="img-fluid" alt=""/>
                    <span>{lang=='en'? 'السعودية': 'Saudi Arabia'}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={egyptPic} className="img-fluid" alt=""/>
                <span>{lang=='en'? 'مصر': 'Egypt'}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={jordanPic} className="img-fluid" alt=""/>
                <span>{lang=='en'? 'الاردن': 'Jordan'}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={lebnanPic} className="img-fluid" alt=""/>
                <span>{lang=='en'? 'لبنان': 'Lebanon'}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={nigeriaPic}className="img-fluid" alt=""/>
                <span>{lang=='en'? 'نيجيريا': 'Nigeria'}</span>    
            </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={kenyaPic} className="img-fluid" alt=""/>
                <span>{lang=='en'? 'كينيا': 'Kenya'}</span>    
            </a>
            </li>
        </ul>
    </>
}

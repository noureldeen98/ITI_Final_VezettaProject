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
import { useTranslation } from 'react-i18next';


export default function CitiesListComponent() {
    const [t, i18n] = useTranslation();

    return <>
        <ul className="dropdown-menu text-end">
            <li> <a className={`${style['dropdown-item']}`} href="#">
                    <img src={saudiPic} className="img-fluid" alt=""/>
                    <span>{t('citiesUI.saudi')}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={egyptPic} className="img-fluid" alt=""/>
                <span>{t('citiesUI.egypt')}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={jordanPic} className="img-fluid" alt=""/>
                <span>{t('citiesUI.jordan')}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={lebnanPic} className="img-fluid" alt=""/>
                <span>{t('citiesUI.lebanon')}</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={nigeriaPic}className="img-fluid" alt=""/>
                <span>{t('citiesUI.nigeria')}</span>    
            </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={kenyaPic} className="img-fluid" alt=""/>
                <span>{t('citiesUI.kenya')}</span>    
            </a>
            </li>
        </ul>
    </>
}

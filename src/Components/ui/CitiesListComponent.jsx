import React from 'react';
import style from'./citieslist.module.css';
import saudiPic from '../../Images/cities/Saudi.jpg';
import egyptPic from '../../Images/cities/Egypt.jpg';
import jordanPic from '../../Images/cities/Jordan.jpg';
import kenyaPic from '../../Images/cities/Kenya.jpg';
import lebnanPic from '../../Images/cities/Lebanon.jpg';
import nigeriaPic from '../../Images/cities/Nigeria.jpg';


export default function CitiesListComponent() {
    return <>
        <ul className="dropdown-menu text-end">
            <li> <a className={`${style['dropdown-item']}`} href="#">
                    <img src={saudiPic} className="img-fluid" alt=""/>
                    <span>السعودية</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={egyptPic} className="img-fluid" alt=""/>
                <span>مصر</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={jordanPic} className="img-fluid" alt=""/>
                <span>الاردن</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={lebnanPic} className="img-fluid" alt=""/>
                <span>لبنان</span>
                </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={nigeriaPic}className="img-fluid" alt=""/>
                <span>نيجيريا</span>    
            </a>
            </li>
            <li> <a className={`${style['dropdown-item']}`} href="#">
                <img src={kenyaPic} className="img-fluid" alt=""/>
                <span>كينيا</span>    
            </a>
            </li>
        </ul>
    </>
}

import React, { useContext, useState } from 'react';
import style from './firstFooterMenu.module.css';
import logo from '../../../Images/footer/logo.jpg';
import FooterItem from './FooterItem';
import { langContext } from '../../../Context/LangContext';
export default function FirstFooterMenu() {
    const {lang, setLang} = useContext(langContext);
    const [firstMenuAR, setFirstMenuAR] = useState([
        'من نحن' , 'فريق فيزيتا' , 'وظائف', 'الصحافة'
    ]);
    const [firstMenu, setFirstMenu] = useState([
        'About Us', 'Our Team', 'Careers', 'Press'
    ])
    return <>
    <div className={`col-5 col-md-2 mx-md-2 mx-lg-0 d-grid ${style.col1}`}>
        <img src={logo} className="img-fluid"/>
        {lang=='en'? (
            firstMenuAR.map((item, index) => (
            <FooterItem key={index} item={item} />
        ))
        ): (
            firstMenu.map((item, index) => (
            <FooterItem key={index} item={item} />
        ))
        )}
    </div>
    </>;
}

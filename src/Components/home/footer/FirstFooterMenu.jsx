import React, { useState } from 'react';
import style from './firstFooterMenu.module.css';
import logo from '../../../Images/footer/logo.jpg';
import FooterItem from './FooterItem';
export default function FirstFooterMenu() {
    const [firstMenu, setFirstMenu] = useState([
        'من نحن' , 'فريق فيزيتا' , 'وظائف', 'الصحافة'
    ]);
    return <>
    <div className={`col-5 col-md-2 mx-md-2 mx-lg-0 ${style.col1}`}>
        <img src={logo} className="img-fluid"/>
        {firstMenu.map((item, index) => (
            <FooterItem key={index} item={item} />
        ))}
    </div>
    </>;
}

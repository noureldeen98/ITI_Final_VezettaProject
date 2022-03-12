import React, { useContext, useState } from 'react';
import style from './firstFooterMenu.module.css';
import logo from '../../../Images/footer/logo.jpg';
import FooterItem from './FooterItem';
import { langContext } from '../../../Context/LangContext';
import { useTranslation } from 'react-i18next';
export default function FirstFooterMenu() {
    const [t, i18n] = useTranslation();
    const myData = [t('footer.firstFooter.one'), t('footer.firstFooter.two'),
    t('footer.firstFooter.three'), t('footer.firstFooter.four')]
    return <>
    <div className={`col-5 col-md-2 mx-md-2 mx-lg-0 d-grid ${style.col1}`}>
        <img src={logo} className="img-fluid"/>
        {myData.map((item, index) => (
            <FooterItem key={index} item={item} />
        ))}
    </div>
    </>;
}

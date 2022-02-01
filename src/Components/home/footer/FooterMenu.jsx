import React, { useState } from 'react';
import FooterItem from './FooterItem';
import style from './footerMenu.module.css';

export default function FooterMenu(props) {
    let col = props.col;
    return <>
    <div className={`col-5 col-md-2 mx-md-2 mx-lg-0 ${style.col2}  ${style.col3}  ${style.col4}`}>
        <span>{props.title}</span>
        {props.data.map((item, index) => (
            <FooterItem key={index} item={item}/>
        ))}
        {/* <a href="#"> التخصص</a>
        <a href="#">المنطقة</a>
        <a href="#"> التامين</a>
        <a href="#"> المستشفي</a>
        <a href="#">المركز</a> */}
    </div>
    </>;
}

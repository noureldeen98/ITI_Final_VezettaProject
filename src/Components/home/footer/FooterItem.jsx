import React from 'react';
import style from './footerItem.module.css';
export default function FooterItem(props) {
    return <>
        <a href="#" className={style.link}> {props.item}</a>
    </>;
}

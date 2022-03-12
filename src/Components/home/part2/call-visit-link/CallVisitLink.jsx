import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './CallVisitLink.module.css';
import {langContext} from '../../../../Context/LangContext'
export default function CallVisitLink(props) {
    const link = props.data.id == 2 ? '/visiting' : '/DoctorCall' ;    
    const {lang, setLang} = useContext(langContext); 
    return <>
        <div className={`col-lg-4 col-md-6 col-sm-6 ${style.smDIV}`}>
            <div className={`card ${style.part2bCard} flex-sm-column flex-md-row row mx-3`}>
                <div>
                    <img src={props.data.img} className="card-img col-4" alt="..."
                    style={{'height': '11em'}}/>
                </div>
                <div className="card-body col-8" >
                    <h2 className="card-title"> 
                    {props.data.title}
                    </h2> 
                    <p className="card-text" id="pTxt">
                        {props.data.body}
                    </p>
                    <Link to={link} style={{'textDecoration': 'none', 'color':'#0070cd'}}
                        className="fs-1s">
                        <span> {lang=='en'? 'احجز الان' : 'Book now'} </span>
                        <span><i className="fas fa-caret-left text-danger"></i></span>
                    </Link>
                </div>
            </div>
        </div>
</>;
}

import React from 'react';
import style from './CallVisitLink.module.css';
export default function CallVisitLink(props) {
    console.log("data",props.data);
    return <>
        <div className={`col-lg-4 col-md-6 ${style.smDIV}`}>
            <div className={`card ${style.part2bCard} flex-sm-column flex-md-row`}>
                <div>
                    <img src={props.data.img} className="card-img" alt="..."
                    style={{'height': '10em'}}/>
                </div>
                <div className="card-body">
                    <h2 className="card-title"> {props.data.title}</h2> 
                    <p className="card-text">
                        {props.data.body}
                    </p>
                    <a href="./DoctorCall.html" style={{'textDecoration': 'none', 'color':'#0070cd'}}
                        className="fs-1s">
                        <span>احجز الان </span>
                        <span><i className="fas fa-caret-left text-danger"></i></span>
                    </a>
                </div>
            </div>
        </div>
</>;
}

import React from 'react';
import style from './corona.module.css';
import coronaLogo from '../../../../Images/part3/part3logo.png';
import OfferSlider from '../offerSlider/OfferSlider';
import { Link } from 'react-router-dom';
export default function Corona() {
    return <>
    <div className={style.part3} style={{'width': '100%', 'overflow': 'hidden'}}>
        <div className="row justify-content-center py-5 g-0">
            <div className="col-lg-9 row justify-content-center" id={style.p3}>
                <div className={`${style.part3logo} col-1 align-self-center`}>
                    <img src={coronaLogo} 
                    className="img-fluid"/>
                </div>
                <div className="col-10">
                    <h2>عندك اعراض كورونا؟</h2>
                    <p>
                        تقدر تسال وتستفسر عن فيروس كورونا بمكالمة مجانية مع دكتور 
                        باطنة برعاية وزارة الصحة والسكان, من الساعة 8ص ل 12ص.
                    </p>
                    <h3 className="d-block d-md-none">
                        <a href="./Covid.html" className="fs-2">
                            <span>  كلم دكتور مجانا </span>
                            <span><i className="fas fa-caret-left text-danger"></i></span>
                        </a>
                    </h3>
                </div>
                <div className="col-1 d-none d-md-block">
                    <Link to="/covid" className="" style={{'fontSize': '5em'}}>
                        <span><i className={`fas fa-caret-left ${style.arr}`}></i></span>
                    </Link>
                </div>
            </div>
        </div>
        <hr style={{'width': '65%', 'margin': '2% 18%', 'marginTop': '-2%'}}></hr>
        <OfferSlider />  {/*row justify-content-center */}

    </div>
    
    </>;
}

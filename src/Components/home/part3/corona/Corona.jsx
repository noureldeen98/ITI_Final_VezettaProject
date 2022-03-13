import React, { useContext } from 'react';
import style from './corona.module.css';
import coronaLogo from '../../../../Images/part3/part3logo.png';
import OfferSlider from '../offerSlider/OfferSlider';
import { Link } from 'react-router-dom';
import { langContext } from '../../../../Context/LangContext';
import { useTranslation } from 'react-i18next';
export default function Corona() {
    const {lang, setLang} = useContext(langContext);
    const [t, i18n] = useTranslation();
    return <>
    <div className={style.part3} style={{'width': '100%', 'overflow': 'hidden'}}>
        <div className="row justify-content-center py-5 g-0">
            <div className="col-lg-9 row justify-content-center" id={style.p3}>
                <div className={`${style.part3logo} col-1 align-self-center`}>
                    <img src={coronaLogo} 
                    className="img-fluid"/>
                </div>
                <div className="col-9 mx-3">
                    <h2>
                        {t('part3.corona.corona')}
                    </h2>
                    <p id='cTxt'>
                        {t('part3.corona.details')}
                    </p>
                    <h3 className="d-block d-md-none">
                        <a href="./Covid.html" className="fs-2">
                            <span> 
                                {t('part3.corona.call')}
                            </span>
                            {lang==='en'?
                                <span><i className="fas fa-caret-left text-danger" id="cIcon"></i></span>
                            : 
                                <span><i className="fas fa-caret-right text-danger" id="cIcon"></i></span>
                            }
                        </a>
                    </h3>
                </div>
                <div className="col-1 d-none d-md-block">
                    <Link to="/covid" className="" style={{'fontSize': lang=='en'?'5em':'0em'}}>
                        {lang=='en'? 
                        <span><i className={`fas fa-caret-left ${style.arr} fs-1`}></i></span>
                        : 
                        <span><i className={`fas fa-caret-right ${style.arr} fs-1`}></i></span>
                        }
                    </Link>
                </div>
            </div>
        </div>
        <hr style={{'width': '65%', 'margin': '2% 18%', 'marginTop': '-2%'}}></hr>
        <OfferSlider />  {/*row justify-content-center */}

    </div>
    
    </>;
}

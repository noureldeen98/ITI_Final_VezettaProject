import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../../Context/LangContext';
import pic from '../../Images/2456051.jpg'
export default function NotFound(props) {
    const {lang, setLang} = useContext(langContext);
    return <>
    <div className="container">
        <div className="row">
            <div className="col-10 mx-auto text-center text-title pt-5">
                <img src={pic} alt="" width="700" height="400"/>
                    {lang =='en'? (
                        <h3 className='text-center'>
                            العنوان الذي تحاول الوصول اليه {" "}
                            <span className="text-info">"{props.location.pathname}"</span> 
                            {" "} غير موجود 
                        </h3>

                    ) :
                    <h3 className='text-center'>
                        the requested url {" "}
                        <span className="text-info">"{props.location.pathname}"</span> 
                        {" "} was not found 
                    </h3>
                    }
                
                <button className="btn btn-info py-2 my-4">
                    <Link to="/" className='text-light text-decoration-none'>
                    {lang=='en'? 'الرجوع للصفحة الرئيسية' : 'Back to the homepage'}
                    </Link>
                </button>
            </div>
        </div>
    </div>
    </>;
}

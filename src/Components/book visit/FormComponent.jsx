import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getAreas, getCities } from '../../ReactRedux/Actions/CitiesActionRedux';
import { getDepts } from '../../ReactRedux/Actions/DeparmentsAction';
import {addAppointement} from '../../ReactRedux/Actions/homeVisitAction'
import style from './Form.module.css';
// bookVisitReducer
export default function FormComponent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const areas = useSelector(state => state.citiesReducer.areas);
    const cities = useSelector((state) => state.citiesReducer.cities);
    const depts = useSelector((state) => state.deptReducer);
    //for book home visit
    const book = useSelector((state) => state.bookVisitReducer.data);
    //select areas
    const [selectedArea, setSelectedArea] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [docID, setDocID] = useState('xMmi45pdpT6O3gxorKAC');  //default id for allcities
    const [selectedDpts, setSelectedDpts] = useState('');
    //form handler
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [err, setErr] = useState({
        nameErr: null,
        phoneErr: null
    });
    useEffect(() => {
        dispatch(getDepts());
        dispatch(getCities());
        dispatch(getAreas(docID))
    }, [])
    useEffect(() => {
        dispatch(getAreas(docID))
    }, [docID])
    const setCity = (e, id) => {
        setDocID(id); //id of specific doc to get related Areas
        setSelectedCity(e.target.outerText)
    }
    const setArea = (e) => {
        setSelectedArea(e.target.outerText)
    }    
    const setDpt = (e) => {
        setSelectedDpts(e.target.outerText)
    }
    //for form 
    const setNameHandler = (e) => {
        if(e.target.id == 'name') {
            setErr({
                ...err,
                nameErr: (name.length<3 || name =='') ? 'يجب ادخال اسم صحيح': null
            })
        }
        setName(e.target.value);
    }
    const setPhoneHandler = (e) => {
        if(e.target.id == 'mobile' ) {
            setErr(state => {
                return{
                    ...state,
                    phoneErr: (phone.length<8) ? ' يجب ادخال رقم تلفون لا يقل عن 8 ارقام': null
                }
            })
        }
        setPhone(e.target.value);
    }
    const userData = {
        name, phone, dpt: selectedDpts,
        city:selectedCity, area:selectedArea
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(selectedDpts==''||selectedArea=='' || selectedCity==''
            || phone=='' || name== '' || err.nameErr!=null ||err.phoneErr!=null) {
                return;
            }
        console.log('data', userData);
        dispatch(addAppointement(userData));
        history.push('/done');
    }
    return <>
    <div className="col-lg-5 col-md-6 col-12 order-2 order-md-1">
        <form onSubmit={(e) => submitHandler(e)} id="form">
            <div className={style.header} >
                <h5>ادخل بياناتك وسيتم التواصل معك خلال دقائق </h5>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">الاسم</label>
                <input type="text" className="form-control" id="name" 
                placeholder="الاسم" value={name} onChange={(e) => setNameHandler(e)}/>
                <small className='text-danger'>{err.nameErr}</small>
            </div>
            <div className="mb-3">
                <label htmlFor="mobile" className="form-label">رقم التليفون</label>
                <input type="text" className="form-control" id="mobile" 
                placeholder="رقم التليفون" value={phone} 
                onChange= {(e) => setPhoneHandler(e)}
                />
                <small className="text-danger">{err.phoneErr}</small>
            </div>
            <div className={`mb-3 ${style.dropdown}`}>
                <label htmlFor="type" className="form-label">التخصص</label>
                <div className={style.dropdown}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {selectedDpts=='' ? 'اختر التخصص' : selectedDpts}
                    </button>
                    <ul className="dropdown-menu">
                        {depts.dpts.map((el, index) => (
                            <li key={index} onClick={(e) => setDpt(e)}> 
                                <a className="dropdown-item" href="#">{el.nameAR}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`mb-3 ${style.dropdown}`}>
                <label htmlFor="type" className="form-label">المحافظة</label> 
                <div className={style.dropdown}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                        {selectedCity==''? 'اختر المحافظة' : selectedCity}
                    </button>
                    <ul className="dropdown-menu">
                        {cities.map((el, index) => (
                            <li key={index} onClick={(e, id) => setCity(e, el.id)}>
                                <a className="dropdown-item" href="#"> {el.nameAR}</a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            <div className={`mb-3 ${style.dropdown}`}>
                <label htmlFor="type" className="form-label">المنطقة</label> 
                <div className={style.dropdown}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    
                        {selectedArea==''? 'اختر المنطقة' : selectedArea}
                    </button>
                    <ul className="dropdown-menu">
                        {areas && areas.areasAR && areas.areasAR.map((el, index) => (
                            <li key={index} onClick={(e) => setArea(e)}>
                                <a className="dropdown-item" href="#"> {el}</a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            <button type="submit" className="btn btn-danger"
            >تاكيد</button>
        </form>
    </div>
    </>;
}

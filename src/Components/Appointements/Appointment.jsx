import React, { useEffect, useState } from 'react';
import style from './Appointment.module.css';
import {useTranslation} from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificDoc } from '../../ReactRedux/Actions/DoctorCallAction';
import { db } from '../../FireBaseConfiguration/FirebaseConfiguration';
import { async } from '@firebase/util';
export default function Appointment() {
    const [t, i18n] = useTranslation();
    var loginStatus = localStorage.getItem('Name');
    var userID = localStorage.getItem('usrID');
    const [userApp, setUserApp] = useState([]);
    let userAppointments = [];
    /* [
        {docName: '', 
        clinicAddress: '',
        bookApp: date, day , hours,
        details: 'tm al8aa l 7agz'
        }
    ]
    */
    const dispatch = useDispatch();
    const selector = useSelector(state => state.getDoctors);
    useEffect(() => {
        const test = async() => {
            if(userID) {
                let userData = await db.collection('/Users').doc(userID).get();
                const uData = userData.data();
                userAppointments = uData.appointment;
                let allApp = [];
                userAppointments.map(app => {
                    const doctorName = app.DoctorName;
                    const docAdd = app.ClincAddrs;
                    var newApp = {
                        docName: doctorName,
                        appointment: app.day + ' ' + app.date + ', ' + app.hour,
                        docAdd
                    };
                    allApp.push(newApp);
                })
                setUserApp(allApp)
            }
        }
        test();
        
    }, [])    
    
    return (
        <>
        {
            (loginStatus) ? (
                <div className="app" id={style.app}>
                <div className="row">
                    <small>{t('appointment.vezeeta')} / {t('appointment.mytimetable')} </small>
                </div>
                <div className="row">
                    <table className='table table-striped p-3 m-3'>
                        <thead>
                            <tr className='p-5'>
                                <th scope="col">{t('appointment.doctorName')}</th>
                                <th scope="col">{t('appointment.where')}</th>
                                <th scope="col">{t('appointment.app')}</th>
                                <th scope="col">{t('appointment.info')}</th>
                            </tr>
                        </thead>
                        <tbody>
                        {userApp.map(data => (
                            <tr key={data.docName}>
                                <td>{data.docName}</td>
                                <td>{data.docAdd}</td>
                                <td>{data.appointment}</td>
                                <td>{data.other}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            ): (
                <div className="app" id={style.app}>
                    <h2 className='text-center text-secondary m-4 p-4'>{t('appointment.sign')}</h2>
                </div>
            )
        }

        
        </>
    )
}

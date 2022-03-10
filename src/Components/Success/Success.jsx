import React from 'react';
import pic from '../../Images/succes/rigth.png';
import styles from './styles.module.css';
export default function Success() {
    return (
        <div className='container-fluid'>
            <div className="row py-5">
                <img src={pic} alt="success" className={styles.pic}/>
            </div>
            <div className="row">
                <h1 className='text-center'>شكرا لك</h1>
                <h3 className='text-center'> سيتم الاتصال بك خلال دقائق</h3>
            </div>
        </div>
    )
}

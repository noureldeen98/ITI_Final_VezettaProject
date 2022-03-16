import React, { useState } from 'react';
import PHeader from '../PHeader/PHeader';
import PayPalCheckOutButtons from './PayPalCheckOutButtons';
import './CheckOut.css';

const CheckOut = () => {

    return (
        <>
            <PHeader />
            <div className="checkout-container">
                <div className='checkout-details'>
                    <PayPalCheckOutButtons />
                </div>
            </div>
        </>
    )
}

export default CheckOut;
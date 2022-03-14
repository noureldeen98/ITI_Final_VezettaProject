import React, { useState, useRef, useEffect } from 'react';
import PHeader from '../PHeader/PHeader';
import './CheckOut.css';

const CheckOut = () => {
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons().render(paypal.current)
    }, [paypal])

    return (
        <>
            <PHeader />
            <div className="checkout-container">
                <div ref={paypal} className='checkout-details'>
                </div>
            </div>
        </>
    )
}

export default CheckOut;
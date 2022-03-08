import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import PHeader from "../PHeader/PHeader";
// import Result from '../Search/Result';
import PaymentModal from './PaymentModal'
import Search from '../Search/Search'
import arrowup from '../../../Images/pharmacy/angle-up-solid-svgrepo-com.svg'
import './Cart.css';

export default function Cart() {
    const [btn, setBtn] = useState(false);
    const { t } = useTranslation();
    return (
        <>
            <PHeader />

            <div className="search-cart" >
                <Search />
            </div>

            <div className="cart">

                <div className="cart-header">
                    <div className='fs-2 fw-bold' style={{ color: '#58595B' }}>
                        {t("cart_header")}
                    </div>
                    <div className='fs-2 fw-bold' style={{ color: '#58595B' }}>
                        {t("cart_items_number")}
                    </div>
                </div>

                <div className="cart-body">
                </div>

                <div className="cart-footer">
                    <div className="right">
                        <button className="payment-btn" onClick={() => setBtn(!btn)}>
                            <img src={arrowup} alt="aroow_up" width="20" height="auto" />
                        </button>
                    </div>
                    <div className="left">
                        <button className="cart-btn">
                            {t("cart_btn")}
                        </button>
                    </div>
                </div>
            </div>
            
            <PaymentModal btn={btn} />

        </>
    )
}
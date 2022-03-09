import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PHeader from "../PHeader/PHeader";
import PaymentModal from './PaymentModal';
import Search from '../Search/Search';
import CartItem from './CartItem';
import arrowup from '../../../Images/pharmacy/angle-up-solid-svgrepo-com.svg';
import { connect } from 'react-redux';
import './Cart.css';

const Cart = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let count = 0;
        let price = 0;
        cart.forEach((item) => {
            count += item.qty;
            price += item.qty * item.price;
        })
        setCartCount(count)
        setTotalPrice(price)
    }, [cart, cartCount, totalPrice, setCartCount, setTotalPrice])

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
                        {t("cart_items_number")}{cartCount}
                    </div>
                </div>

                <div className="cart-body">
                    {cart.map((item) => {
                        return (
                            <CartItem key={item.id} item={item} />
                        )
                    })}
                </div>

                <div className="cart-footer">
                    <div>
                        <button className="payment-btn" onClick={() => setBtn(!btn)}>
                            <img src={arrowup} alt="aroow_up" width="20" height="auto" />
                        </button>
                    </div>
                    <div className="total-price">
                        {totalPrice} {t('currency')}
                    </div>
                    <div>
                        <button className="cart-btn">
                            {t("cart_btn")}
                        </button>
                    </div>
                </div>
            </div>

            <PaymentModal totalPrice={totalPrice} btn={btn} />

        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.medicine.cart
    }
}

export default connect(mapStateToProps)(Cart);
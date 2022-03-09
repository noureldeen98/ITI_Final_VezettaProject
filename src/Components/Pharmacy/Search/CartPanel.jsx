import React, { useState, useEffect } from 'react';
import arrow from '../../../Images/pharmacy/left-arrow-svgrepo-com.svg'
import { Link } from 'react-router-dom';
import './CartPanel.css';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

const CartPanel = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let count = 0;
        let price = 0;
        cart.forEach((item) => {
            count += item.qty;
            price = (item.qty * item.price);
        })
        setCartCount(count)
        setTotalPrice(price)
    }, [cart, cartCount, totalPrice, setCartCount, setTotalPrice])

    const { t } = useTranslation();
    return (
        <>
            <div className='cart-panel'>
                <div className='items'>
                    {cartCount} {t('item')}
                </div>
                <div className='middle'>
                    {totalPrice} {t('currency')}
                </div>
                <div className='go-to-cart'>
                    <Link to="/cart">
                        <span className="link">
                            {t("cart_header")}
                        </span>
                        <img src={arrow} alt="arrow" width="20" height="20" />
                    </Link>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.medicine.cart
    }
}

export default connect(mapStateToProps)(CartPanel);
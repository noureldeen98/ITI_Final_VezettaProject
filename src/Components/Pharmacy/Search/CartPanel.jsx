import React from 'react';
import arrow from '../../../Images/pharmacy/left-arrow-svgrepo-com.svg'
import { Link } from 'react-router-dom';
import './CartPanel.css';
import { useTranslation } from 'react-i18next';

export default function CartPanel() {
    const { t } = useTranslation();
    return (
        <>
            <div className='cart-panel'>
                <div className='items'>
                    3 {t('item')}
                </div>
                <div className='middle'>
                    150 {t('currency')}
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

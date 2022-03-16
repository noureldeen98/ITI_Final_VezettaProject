import React, { useState, useEffect } from 'react';
import PHeader from "./PHeader/PHeader";
import PAlert from './PHeader/PAlert';
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Map from './Map/Map';
import PFooter from './PFooter/PFooter';
import CartPanel from './Search/CartPanel';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Pharmacy = ({ cart }) => {
    const { t } = useTranslation();

    const [showPanel, setShowPanel] = useState(0)
    useEffect(() => {
        let length = cart.length
        setShowPanel(length)
    }, [cart])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(user);
    }, [user]);

    return (
        <>
                <PHeader />
                <PAlert message={t('Header_Msg')} />
                <Section1 />
                <Section2 />
                <Map />
                <Section3 />
                <PFooter />
                {showPanel > 0 ? (
                    <CartPanel />
                ) : null}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.medicine.data,
        cart: state.medicine.cart,
    }
}

export default connect(mapStateToProps)(Pharmacy);
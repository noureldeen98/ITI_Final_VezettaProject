import React, { useState, useEffect } from 'react';
import PHeader from "./PHeader/PHeader";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Map from './Map/Map';
import PFooter from './PFooter/PFooter';
import CartPanel from './Search/CartPanel';
import { connect, Provider } from 'react-redux';
import storePharmacy from './Redux/store';

const Pharmacy = ({ cart }) => {
    const [showPanel, setShowPanel] = useState(0)
    useEffect(() => {
        let length = cart.length
        setShowPanel(length)
    }, [cart])

    return (
        <>
            <Provider store={storePharmacy}>
                <PHeader />
                <Section1 />
                <Section2 />
                <Map />
                <Section3 />
                <PFooter />
                {showPanel > 0 ? (
                    <CartPanel />
                ) : null}
            </Provider>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.medicine.data,
        cart: state.medicine.cart
    }
}

export default connect(mapStateToProps)(Pharmacy);
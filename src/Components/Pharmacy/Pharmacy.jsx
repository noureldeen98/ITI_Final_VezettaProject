import React from 'react';
import PHeader from "./PHeader/PHeader";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Map from './Map/Map';
import PFooter from './PFooter/PFooter';
import CartPanel from './Search/CartPanel';
import { Provider } from 'react-redux';
import storePharmacy from './Redux/store';


export default function Pharmacy() {
    return (
        <>
            <Provider store={storePharmacy}>
                <PHeader />
                <Section1 />
                <Section2 />
                <Map />
                <Section3 />
                <PFooter />
                <CartPanel />
            </Provider>
        </>
    );
}
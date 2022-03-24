import React, { useState } from "react";
import PHeader from "../PHeader/PHeader";
import PayPalCheckOutButtons from "./PayPalCheckOutButtons";
// import { TailSpin } from "react-loader-spinner";

import "./CheckOut.css";

const CheckOut = () => {
    // let [loading, setLoading] = useState(true);
    // setTimeout(() => {
    //     setLoading(false)
    // }, 3000);
    return (
        <>
            <PHeader />

            <div className="checkout-container">
                <div className="checkout-details">
                    {/* {loading ? (
                        <TailSpin color="#0172CB" width={100} height={100} />
                    ) : (
                        <PayPalCheckOutButtons />
                    )} */}
                    <PayPalCheckOutButtons />

                </div>
            </div>
        </>
    );
};

export default CheckOut;

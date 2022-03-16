import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PaymentModal from "./PaymentModal";
import arrowup from "../../../Images/pharmacy/angle-up-solid-svgrepo-com.svg";
import DeliveryModal from "./DeliveryModal";
import SigninModal from "../PHeader/SigninModal";
import { connect } from "react-redux";
import "./Cart.css";

const CartFooter = ({ cart }) => {
    const [show, setShow] = useState(false);
    const [paymentBtn, setPaymentBtn] = useState(false);
    const [btn, setBtn] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [user] = useState(localStorage.getItem("authUserID"));

    useEffect(() => {
        let price = 0;
        cart.forEach((item) => {
            price += item.qty * item.price;
        });
        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice]);

    const { t } = useTranslation();

    return (
        <>
            <div className="cart-footer">
                <div>
                    <button
                        className="payment-btn"
                        onClick={() => setPaymentBtn(!paymentBtn)}
                    >
                        <img src={arrowup} alt="aroow_up" width="20" height="auto" />
                    </button>
                </div>
                <div className="total-price">
                    {totalPrice + 10} {t("currency")}
                </div>
                <div>
                    <button
                        className="cart-btn"
                        onClick={() => {
                            user ? setShow(!show) : setBtn(!btn)
                        }}
                    >
                        {t("cart_btn")}
                    </button>
                    <DeliveryModal show={show} />
                    <SigninModal btn={btn} />
                </div>
            </div>
            <PaymentModal totalPrice={totalPrice + 10} btn={paymentBtn} />
        </>
    );
};

const setMapsToProps = (state) => {
    return {
        cart: state.medicine.cart,
    };
};
export default connect(setMapsToProps)(CartFooter);

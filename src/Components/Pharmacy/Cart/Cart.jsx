import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PHeader from "../PHeader/PHeader";
import Search from "../Search/Search";
import CartItem from "./CartItem";
import CartFooter from './CartFooter';
import { useHistory } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart }) => {
    const [cartCount, setCartCount] = useState(cart.length);

    useEffect(() => {
        setCartCount(cart.length);
    }, [cart, cartCount, setCartCount]);

    const { t } = useTranslation();

    const history = useHistory();
    const clear = () => {
        localStorage.removeItem('Cart')
        history.push('/pharmacy')
        window.location.reload();
    }

    return (
        <>
            <PHeader />

            <div className="search-cart d-flex justify-content-center align-items-center" >
                <div className="search-cart-container">
                <Search />
                </div>
                <button className="clear-btn" onClick={clear}>
                    Clear
                </button>
            </div>

            <div className="cart p-1">
                <div className="cart-header">
                    <div className="fs-2 fw-bold" style={{ color: "#58595B" }}>
                        {t("cart_header")}
                    </div>
                    <div className="fs-2 fw-bold" style={{ color: "#58595B" }}>
                        {t("cart_items_number")}
                        {cartCount === 0 ? <Redirect to={"/pharmacy"} /> : cartCount}
                    </div>
                </div>

                <div className="cart-body pt-2 p-5">
                    {cart.map((item) => {
                        return <CartItem key={item.id} item={item} />;
                    })}
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <CartFooter />
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.medicine.cart,
    };
};

export default connect(mapStateToProps)(Cart);
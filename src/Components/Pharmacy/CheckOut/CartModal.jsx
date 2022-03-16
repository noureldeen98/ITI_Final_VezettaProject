import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ItemShow from "./ItemShow";
import "./CartModal.css";

const CartModal = ({ cartBtn, cart }) => {
    const [show, setShow] = useState(cartBtn);
    const history = useHistory();
    useEffect(() => {
        setShow(cartBtn);
        console.log(cart);
    }, [cart, cartBtn]);

    const [cartCount] = useState(cart.length);

    const { t } = useTranslation();

    return (
        <>
            <Modal show={show} onHide={setShow}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <Modal.Title className="fw-bold fs-1 mb-5">
                        {t("cart_header")}
                    </Modal.Title>
                    <h1>
                        {t("cart_items_number")} {cartCount}
                    </h1>
                    <div className="row">
                        {cart.map((item) => {
                            return (
                                <div className="col-6">
                                    <ItemShow key={item.id} item={item} />
                                </div>
                            );
                        })}
                    </div>

                    <div className="d-flex justify-content-around mt-5">
                        <button
                            className="payment-confirm-btn"
                            onClick={() => setShow(!show)}
                        >
                            {t("Payment_Modal_Btn")}
                        </button>
                        <button
                            className="payment-confirm-btn"
                            variant="primary"
                            onClick={() => {
                                history.push("/cart");
                            }}
                        >
                            {t("Edit_Order")}
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.medicine.cart,
    };
};

export default connect(mapStateToProps)(CartModal);

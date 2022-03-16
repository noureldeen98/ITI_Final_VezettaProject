import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import "./ItemShow.css";

const ItemShow = ({ item }) => {
    const { t } = useTranslation();

    return (
        <>
            <div className="cart-container">
                <div className="row cart-item">
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <img
                            src={item.url}
                            width="50"
                            height="auto"
                            alt="medicineIMG"
                        />
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="row fs-6 fw-bold">
                            {item.nameAR}
                        </div>
                        <div className="row fs-6 fw-bold">
                            {item.nameEN}
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="row d-flex justify-content-center align-items-center fs-6">
                            {item.price} {t("currency")}
                        </div>
                        <div className="row d-flex justify-content-center align-items-center fs-6" style={{ borderBottom: '.5px solid black' }}>
                            {item.qty} {t('Qty')}
                        </div>
                        <div className="row d-flex justify-content-center align-items-center fs-6">
                            {item.qty * item.price} {t("currency")}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.medicine.cart,
    };
};

export default connect(mapStateToProps)(ItemShow);

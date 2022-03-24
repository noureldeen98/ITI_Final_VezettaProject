import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { addToCart } from "../Redux/medicine/medicineActions";
import "./Search.css";


const Result = ({ data, cart, addToCart }) => {
    const { t } = useTranslation();

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(cart))
    }, [cart])

    return data.map((result) => {
        return (
            <>
                <div
                    className="d-flex justify-content-between result-style"
                    key={result.id}
                >
                    <div className="d-flex align-items-center">
                        <img
                            src={result.url}
                            alt="medicine"
                            width="95%"
                            height="95%"
                        />
                    </div>
                    <div
                        className="d-flex flex-column justify-content-between"
                        style={{ width: "300px" }}
                    >
                        <div className="d-flex align-items-start fs-4 fw-bold">
                            {`${result.nameAR} | ${result.nameEN}`}
                        </div>
                        <div className="d-flex align-items-end">
                            {`${result.category}`}
                        </div>
                    </div>
                    {/* <div>
                        {result.category === "Tablet - حبوب" ? (
                            <div className="d-flex align-items-start">
                                {result.molarity} {t("molarity1")} {result.size} {t("size1")}
                            </div>
                        ) : (
                            <div className="d-flex align-items-start">
                                {result.molarity} {t("molarity2")} {result.size} {t("size2")}
                            </div>
                        )}
                    </div> */}
                    <div className="d-flex align-items-center fs-4 fw-bold">
                        {result.price} {t("currency")}
                    </div>
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className="add-btn"
                            onClick={() => addToCart(result.id)}
                        >
                            {t("add_btn")}
                        </button>
                    </div>
                </div>
            </>
        );
    });
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        currentItem: state.medicine.currentItem,
        cart: state.medicine.cart,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);

import React, { useState } from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import "./CartItem.css";
import {
    removeFromCart,
    adjustQty,
    loadCurrentItems,
} from "../Redux/medicine/medicineActions";
import { Link } from "react-router-dom";

const CartItem = ({ item, removeFromCart, adjustQty, loadCurrentItems }) => {
    const { t } = useTranslation();

    const [qty, setQty] = useState(item.qty);

    const qtyChange = (e) => {
        setQty(e.target.value)
    }

    useEffect(() => {
        adjustQty(item.id, qty);
    }, [adjustQty, item.id, qty])

    const increase = () => {
        setQty(qty + 1);
    };

    const decrease = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    };

    return (
        <>
            <div className="cart-container">
                <div className="row cart-item">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                        <Link to={`/item/${item.id}`}>
                            <img
                                src={item.url}
                                width="60"
                                height="auto"
                                alt="medicineIMG"
                                onClick={() => loadCurrentItems(item)}
                            />
                        </Link>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-between align-items-start">
                        <div className="fs-4">
                            {item.nameAR} - {item.nameEN}
                        </div>
                        <div className="fs-5">{item.category}</div>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center fs-4">
                        {item.price} {t("currency")}
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <div className="btn-container">
                            {qty === 1 ? (
                                <button
                                    className="control-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            ) : (
                                <button className="control-btn" onClick={decrease}>
                                    <i className="fas fa-minus"></i>
                                </button>
                            )}
                            <input
                                className="counter-output"
                                readOnly
                                onChange={qtyChange}
                                value={qty}
                            />
                            <button className="control-btn" onClick={increase}>
                                <i className="fas fa-plus"></i>
                            </button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        loadCurrentItems: (item) => dispatch(loadCurrentItems(item)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

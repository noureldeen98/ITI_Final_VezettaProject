import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PHeader from "../PHeader/PHeader";
import PaymentModal from "../Cart/PaymentModal";
import CartModal from "./CartModal";
import DeliveryModal from "../Cart/DeliveryModal";
import userServices from "../userServices";
import { connect } from "react-redux";
import "./DeliveryInfo.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DeliveryInfo = ({ cart }) => {
    const [edit, setEdit] = useState(false);
    const [paymentBtn, setPaymentBtn] = useState(false);
    const [cartBtn, setcartBtn] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let price = 0;
        cart.forEach((item) => {
            price += item.qty * item.price;
        });
        setTotalPrice(price);
    }, [cart, totalPrice, setTotalPrice]);

    const { t } = useTranslation();
    const history = useHistory();

    const [user] = useState(localStorage.getItem("authUserID"));
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [building, setBuilding] = useState("");
    const [flat, setFlat] = useState("");
    const [landmark, setLandmark] = useState("");
    const [label, setLabel] = useState("");
    const [labelOther, setLabelOther] = useState("");

    useEffect(() => {
        const getUserDate = async () => {
            const userData = await userServices.getUser(user);
            const userAdress = userData.data();
            setPhone(userAdress.phone);
            setName(userAdress.Name);
            setStreet(userAdress.Street);
            setBuilding(userAdress.Building);
            setFlat(userAdress.Flat);
            setLandmark(userAdress.landmark);
            setLabel(userAdress.Label);
            setLabelOther(userAdress.LabelOther);
        };
        getUserDate();
    }, [user]);

    const handleDelete = async (id) => {
        await userServices.deleteUser(user);
        setEdit(true);
    };

    return (
        <>
            <PHeader />
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-8">
                        <div className="deliveryinfo-container">
                            <h1
                                style={{
                                    color: "#67686A",
                                    fontWeight: "600",
                                    fontSize: "25px",
                                }}
                            >
                                {t("Delivery_Data")}
                            </h1>
                            <div className="data-container">
                                <div className="header">
                                    <div>
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span>{labelOther ? labelOther : label}</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <div
                                            onClick={() => setEdit(!edit)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <i className="fas fa-pencil-alt"></i>
                                            <span>{t("Edit")}</span>
                                        </div>
                                        <DeliveryModal show={edit} />
                                        <span>|</span>
                                        <div onClick={handleDelete} style={{ cursor: "pointer" }}>
                                            <i className="far fa-trash-alt"></i>
                                            <span>{t("Delete")}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    <div>
                                        <div>
                                            <span>{t("Name")} : </span>
                                            <span>{name}</span>
                                        </div>
                                        <div>
                                            <span>{t("Mobile_Number")} : </span>
                                            <span>{phone.replace("+2", "")}</span>
                                        </div>
                                        <div>
                                            <span>{t("Address_Data")} : </span>
                                            <span>
                                                {street} {building} {flat} {landmark}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex flex-column justify-content-between">
                        <button
                            className="delivery-btn"
                            onClick={() => setPaymentBtn(!paymentBtn)}
                        >
                            {t("Payment_Modal_Title")}
                            <i className="fas fa-money-bill"></i>
                        </button>
                        <button
                            className="delivery-btn"
                            onClick={() => setcartBtn(!cartBtn)}
                        >
                            {t("cart_header")}
                            <i className="fas fa-shopping-cart"></i>
                        </button>
                        <button
                            className="delivery-btn"
                            onClick={() => history.push("/checkout")}
                        >
                            {t("cart_btn2")}
                            <i className="fab fa-cc-paypal"></i>
                        </button>
                        <button
                            className="delivery-btn"
                            onClick={() => history.push("/history")}
                        >
                            {t("Purchases")}
                            <i className="fas fa-history"></i>{" "}
                        </button>
                    </div>
                </div>
            </div>
            <PaymentModal totalPrice={totalPrice + 10} btn={paymentBtn} />
            <CartModal cartBtn={cartBtn} />
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.medicine.cart,
    };
};

export default connect(mapStateToProps)(DeliveryInfo);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useHistory } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from '../../../FireBaseConfiguration/FirebaseConfiguration';


const PayPalCheckOutButtons = ({ cart }) => {
	const [price, setPrice] = useState(0);
	const history = useHistory();

	useEffect(() => {
		let price = 0;
		cart.forEach((item) => {
			price += item.qty * item.price;
		});
		setPrice(price);
	}, [cart, price]);

	const [user] = useState(localStorage.getItem("authUserID"));
	const [paid, setPaid] = useState(false);
	// const [date] = useState(new Date().toLocaleDateString())

	const handleApprove = (orderID) => {
		setPaid(true);
	}

	if (paid) {
		history.push('/deliveryinfo')
	}

	const addToPurchased = async () => {
		const userDoc = doc(db, "PharmacyUsers", user);
		const userSnap = await getDoc(userDoc);
		const userData = userSnap.data();
		const prev = userData.purchases;
		await updateDoc(userDoc, {
			purchases: [...cart, ...prev]
		});
		localStorage.removeItem('Cart');
		window.location.reload();
	}

	return (
		<>
			<PayPalButtons
				style={{
					color: "blue",
					shape: "rect",
					size: "large",
					label: "pay",
				}}
				createOrder={(data, actions) => {
					return actions.order.create({
						intent: 'CAPTURE',
						application_context: {
							shipping_preference: "NO_SHIPPING",
							brand_name: "VEZEETA",
							user_action: 'PAY_NOW',
							payment_method: {
								payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED'
							}
						},
						purchase_units: [
							{
								description: 'Vezeeta pharmacy online store',
								amount: {
									currency_code: 'USD',
									value: price,
								},
							},
						],
					});
				}}
				onApprove={async (data, actions) => {
					const order = await actions.order.capture();
					console.log("order", order);
					handleApprove(data.orderID);
					addToPurchased();
				}}
				onCancel={() => {
					history.push("/cart");
				}}
				onError={(error) => {
					console.log(error)
				}}
			/>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		cart: state.medicine.cart,
	};
};

export default connect(mapStateToProps)(PayPalCheckOutButtons);

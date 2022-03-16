import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useHistory } from "react-router-dom";

const PayPalCheckOutButtons = ({ cart }) => {
	const [products] = useState(cart);
	const [amount] = useState(cart.length);
	const [price, setPrice] = useState(0);
	const history = useHistory();

	useEffect(() => {
		let price = 0;
		cart.forEach((item) => {
			price += item.qty * item.price;
		});
		setPrice(price);
	}, [cart]);

	const [error, setError] = useState(null);
	const [paid, setPaid] = useState(false);
	const handleApprove = (orderID) => {
		setPaid(true);
	}

	if (paid) {
		alert("Purchased Succefully!");
	}

	if (error) {
		alert("Error! try again later");
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
						purchase_units: [
							{
								description: 'Vezeeta pharmacy online store',
								amount: {
									currency_code: 'USD',
									value: (price / 15),
								},
							},
						],
					});
				}}
				onApprove={async (data, actions) => {
					const order = await actions.order.capture();
					console.log("order", order);
					handleApprove(data.orderID);
				}}
				onCancel={() => {
					history.push("/cart");
				}}
				onError={(error) => {
					setError(error);
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

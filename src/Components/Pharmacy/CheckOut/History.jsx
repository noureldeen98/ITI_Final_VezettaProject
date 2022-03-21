import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PHeader from "../PHeader/PHeader";
import userServices from "../userServices";
import { connect } from 'react-redux'
import "./History.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const History = ({ cart }) => {
	const { t } = useTranslation();
	const history = useHistory();
	const [user] = useState(localStorage.getItem("authUserID"));

	const [purchases, setPurchases] = useState([]);

	useEffect(() => {
		const getUserDate = async () => {
			const userData = await userServices.getUser(user);
			const userPurchases = userData.data();
			setPurchases(userPurchases.purchases);
		};
		getUserDate();
	}, [purchases, user]);

	return (
		<>
			<PHeader />
			<div className="container-fluid">
				<div className="row p-5">
					<div className="col-8 history-container">
						<h1 style={{ color: "#67686A", fontWeight: "600", fontSize: "25px" }}>
							{t("Purchases")}
						</h1>
						<div className="history-data-container">
							<table class="table table-hover">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">المنتج</th>
										<th scope="col">الاسم</th>
										<th scope="col">الكمية</th>
										<th scope="col">السعر</th>
										<th scope="col">الاجمالي</th>
										<th scope="col">التاريخ</th>
									</tr>
								</thead>
								<tbody>
									{purchases.map((e, index) => {
										return (
											<>
												<tr>
													<th scope="row">
														{index + 1}
													</th>
													<td>
														<img src={e.url} alt="medicine" width="50" height="50" />
													</td>
													<td>
														{e.nameAR} - {e.nameEN}
													</td>
													<td>
														{e.qty} {t("Qty")}
													</td>
													<td>
														{e.price} {t("currency")}
													</td>
													<td>
														{e.price * e.qty} {t("currency")}
													</td>
													<td>
														{e.date}
													</td>
												</tr>
											</>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-4 d-flex flex-column justify-content-between p-5">
						<button
							className="delivery-btn"
							onClick={() => history.push('/cart')}
						>
							{t("cart_header")}
							<i className="fas fa-shopping-cart"></i>
						</button>
						<button
							className="delivery-btn"
							onClick={() => history.push('/deliveryinfo')}
						>
							{t("Delivery_Data")}
							<i className="fas fa-shopping-cart"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		cart: state.medicine.cart,
	};
};

export default connect(mapStateToProps)(History);

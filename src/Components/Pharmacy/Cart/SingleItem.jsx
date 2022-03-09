import React from 'react';
import { useTranslation } from 'react-i18next';
import PHeader from '../PHeader/PHeader';
import { connect } from 'react-redux';
import CartPanel from '../Search/CartPanel';
import './SingleItem.css';

const SingleItem = ({ currentItem }) => {
    const { t } = useTranslation();
    return (
        <>
            <PHeader />
            <div>
                <div className="item-container">
                    <div className="row item">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <img src={currentItem.url} width="250" height="auto" alt="medicineIMG" />
                        </div>
                        <div className="col-5 d-flex justify-content-center align-items-center fs-3 ">
                            {currentItem.nameAR} - {currentItem.nameEN}
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center fs-2 fw-bold" style={{ color: 'rgb(1, 112, 206)' }}>
                            {currentItem.price} {t("currency")}
                        </div>
                    </div>
                    <div className='details'>
                        <h1>
                            {t('Disclaimer')}
                        </h1>
                        {t('Medicine_Details')}
                    </div>
                </div>
                <CartPanel />
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentItem: state.medicine.currentItem
    }
}

export default connect(mapStateToProps)(SingleItem);
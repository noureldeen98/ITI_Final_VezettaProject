import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import './Search.css';

export default function Result({ data }) {
    const { t } = useTranslation();
    return (
        data.map(result => {
            return (
                <>
                    <div className="d-flex justify-content-between result-style" key={result.id}>
                        <div className="d-flex align-items-center">
                            <img src={result.url} alt="medicine" width="95%" height="95%" />
                        </div>
                        <div className="d-flex flex-column justify-content-between" style={{ width: '300px' }}>
                            <div className="d-flex align-items-start fs-4">
                                {`${result.nameAR} | ${result.nameEN}`}
                            </div>
                            <div className="d-flex align-items-end fs-5">
                                {`${result.category}`}
                            </div>
                        </div>
                        <div>
                            {
                                (result.category === 'Tablet - حبوب')
                                    ?
                                    <div className="d-flex align-items-start fs-6">
                                        {result.molarity} {t('molarity1')} {result.size} {t('size1')}
                                    </div>
                                    :
                                    <div className="d-flex align-items-start fs-6">
                                        {result.molarity} {t('molarity2')} {result.size} {t('size2')}
                                    </div>
                            }
                        </div>
                        <div className="d-flex align-items-center fs-2">
                            {result.price} {t('currency')}
                        </div>
                        <div className="d-flex align-items-center">
                            <button type="button" className="add-btn">
                                {t('add_btn')}
                            </button>
                        </div>
                    </div>
                </>
            )
        })
    )
}

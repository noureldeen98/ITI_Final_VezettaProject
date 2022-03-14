import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PHeader from '../PHeader/PHeader';
import CartFooter from '../Cart/CartFooter';
import DeliveryModal from '../Cart/DeliveryModal';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../FireBaseConfiguration/FirebaseConfiguration";
import './DeliveryInfo.css';

export default function DeliveryInfo() {
    const [edit, setEdit] = useState(false);
    const { t } = useTranslation();

    const handleDelete = async () => {
        const addressRef = doc(db, 'PharmacyUsers')
        try {
            await deleteDoc(addressRef)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            <PHeader />
            <div className='deliveryinfo-container'>
                <h1 style={{ color: "#67686A", fontWeight: '600', fontSize: '25px' }}>
                    {t("Delivery_Data")}
                </h1>
                <div className="data-container">
                    <div className='header'>
                        <div>
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div onClick={() => setEdit(!edit)} style={{ cursor: 'pointer' }}>
                                <i className="fas fa-pencil-alt"></i>
                                <span>
                                    {t("Edit")}
                                </span>
                            </div>
                            <DeliveryModal show={edit} />
                            <span>
                                |
                            </span>
                            <div onClick={handleDelete} style={{ cursor: 'pointer' }}>
                                <i className="far fa-trash-alt"></i>
                                <span>
                                    {t("Delete")}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='body'>
                        <div>
                            <div>
                                <span>
                                    {t('Name')}
                                </span>
                            </div>
                            <div>
                                <span>
                                    {t('Mobile_Number')}
                                </span>
                            </div>
                            <div>
                                <span>
                                    {t('Address_Data')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CartFooter />
        </>
    )
}

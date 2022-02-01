import React from 'react';

export default function SigninModal() {
    return <div>
        <div className="modal-body">
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-12">
                    <div style={{ direction: "rtl;" }}>
                        <label htmlFor="validationCustomUsername"
                            className="form-label float-end">
                            رقم الموبايل <sup>*</sup>
                        </label>
                    </div>
                    <div className="input-group has-validation">
                        <span className="input-group-text"
                            id="inputGroupPrepend">+20</span>
                        <input type="text" className="form-control"
                            id="validationCustomUsername"
                            placeholder="01x xxxx xxxx"
                            aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            برجاء إدخال رقم الموبايل
                        </div>
                    </div>
                </div>
                <div style={{ direction: "rtl" }} className="col-md-12">
                    <label htmlFor="validationCustom01"
                        className="form-label float-end">
                        الإسم بالكامل <sup>*</sup>
                    </label>
                    <input type="text" className="form-control"
                        id="validationCustom01" placeholder="أدخل اسمك بالكامل"
                        required />
                    <div className="invalid-feedback">
                        برجاء إدخال الإسم بالكامل
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn modal-btn btn-primary mt-3"
                        type="submit">تحقق
                        من رقم
                        هاتفك</button>
                </div>
            </form>
        </div>
    </div>;
}

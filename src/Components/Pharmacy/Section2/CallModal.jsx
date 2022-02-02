import React from 'react';

export default function CallModal() {
    return (<div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
            tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-style shadow modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-dark modal-h" id="staticBackdropLabel">
                            تواصل
                            مع صيدلي</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="shadow p-3 d-flex justify-content-end flex-row mb-5 rounded">
                            <a className="me-3 modal-a" href="http://16676">اتصل بنا 16676</a>
                            <i className="fas fa-phone"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

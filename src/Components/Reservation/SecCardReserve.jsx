


const SecCardReserve = () => {


    return (
        <>
            <div className="shadow-sm mb-5 bg-body rounded-3 m-4  d-block pb-3 " style={{'height':'660px'}}>
                <div className="card-text">
                    <p className="text-secondary fs-4 pt-5 me-3 fw-bold">معلومات إضافية للدكتور (إختيارى)</p>
                    <p className="text-secondary fs-6 pt-2 me-3">يمكنك إرسال معلومات عن حالتك الصحية لدكتور</p>
                </div>

                    <div className="col me-4 rounded-0 mb-5 ms-4">
                        <label htmlFor="validationCustomUsername" className="form-label text-secondary fw-bold fs-5">السن</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend"><i className="fas fa-gift"></i></span>
                            <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" placeholder="السن" required />
                            <div className="invalid-feedback">
                                ادخل السن
                            </div>
                        </div>
                    </div>
                    <div className="col me-4 ms-4 text-secondary">
    <label htmlFor="validationDefault04" className="form-label fw-bold fs-5">النوع</label>
    <select className="form-select" id="validationDefault04" required>
      <option defaultValue disabled value="">اختار...</option>
      <option value="male">ذكر</option>
                            <option value="female">أنثى</option>
    </select>
  </div>
                <div className="text-secondary mx-3 mt-5 mb-5  me-4 ms-4">
                    <label htmlFor="validationDefault03" className="form-label fw-bold fs-5">الاعراض</label>
                    <input type="text" className="form-control" id="validationDefault03" placeholder="الاأعراض" required />
                </div>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <button type="button" className="btn btn-secondary btn-lg col-11  mx-auto">أرسل للدكتور</button>
                </div>
            </div>


        </>
    )
}

export default SecCardReserve;
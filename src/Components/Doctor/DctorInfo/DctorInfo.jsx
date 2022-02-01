

const DctorInfo=()=>{

    return(
        <>
       <div className="col-md-7 me-4" >
          <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4 mx-auto d-block" >
            <div className="row">
            <div className="col-2 ">
            {/* <img id="img" className="card-img rounded   rounded-circle   me-2 " alt="image" src='../Images/calldoc/AmalSabry.jpg' /> */}
            </div>
                <div className="card-text col-lg-9 col-md-9 col-sm-8 me-5">
                  <span className="text-secondary fs-2 fw-light " id="dName"><span>دكتور </span> </span><i className="fas fa-phone-alt text-primary fs-5 mx-2"></i><i className="fas fa-video text-primary fs-5 mx-2"></i><span className="text-secondary me-5">٧,٨١٨ مشاهدة</span>
                  <p className="pt-5" id="depart"> </p>
                  <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                  <span className="p-4 text-secondary">التقييم العام من <span id="dRate"></span> زاروا الدكتور
                    اظهر التقييمات</span> 
                  <br/><br/>
                  <span className="border border-secondary p-1 rounded-3 text-secondary"><i className="fas fa-tag text-primary border-bottom border-danger me-2 ms-3 pb-1"></i> تقبل أكواد الخصم</span> <br/><br/>
                  <div className="card " style={{"background-color": "#f5f5f5", "border-radius":"15px 0 15px 0"}}>
                    <div className="card-body">
                  <p className=" text-secondary">شكرا دكتوره امال فعلا ممتازه في كل شئ وأسلوب راقي ج</p>
                  <i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i>
                  </div>
                </div>
              </div>
                </div>
              </div>

          <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4 mx-auto d-block" >
            <div className="row">
                <p className="fs-4 text-secondary fw-bold"><i className="far fa-exclamation border-bottom border-danger text-primary pb-2 fs-3 me-2 ms-3"></i>معلومات عن الدكتور</p>
                <p className=" text-secondary fw-light" id="dInfo"></p>
                </div>
              </div>

          <div className=" shadow-lg p-3 mb-5 bg-body rounded m-4 mx-auto d-block" >
            <div className="row">
                <p className="fs-4 text-secondary fw-bold"><i className="fas fa-star-half-alt border-bottom border-danger text-primary pb-2 fs-3 me-2 ms-3"></i>تقييم المرضي :</p>
               <span className=" text-center"> <i className="fas fa-star text-warning fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i><i className="fas fa-star text-warning me-2 fs-2"></i></span>
              <p className=" text-center text-secondary">التقييم العام</p>  
              <p className=" text-center text-secondary"> من <span id="dRate2"></span> زاروا الدكتور</p>
              <div className="col-4 me-4">
              <span><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star-half-alt text-warning me-2"></i></span>
              <p>تقييم المساعد</p>
              </div>
              <div className="col-4">
              <span><i className="fas fa-star text-warning"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="fas fa-star text-warning me-2"></i><i className="far fa-star text-warning me-2"></i></span>
              <p>تقييم العيادة</p>
              </div>
              <div className="col-3">
              <span className="badge bg-primary p-2">5 / 5</span>  
              <p>تقييم الدكتور</p>
             </div>
            </div>
              </div>
          </div>
        </>
    )
}

export default DctorInfo
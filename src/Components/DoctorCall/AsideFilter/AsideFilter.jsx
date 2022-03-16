
import './search.css'
import { useTranslation } from "react-i18next";

const AsideFilter=()=>{

console.log("AsideFilter")
const { t } = useTranslation();
    return(
        <>
         {/* <!---------------------asideSearch ------------------> */}
      <div className="card col-md-2  shadow-lg  mb-5 me-5 ms-3 sticky-top  pb-5" id="aside1">
        <h5 className="card-title text-center my-3 text-light" id="filter"><i className="fas fa-filter me-2 ms-3 "></i> {t('filter')}</h5>
       
        <div className="accordion  " id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header " id="flush-headingOne">
              <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                <i className="fas fa-headphones-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i><span className="text-primary"> {t('Appointment_Type')}</span>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse show " aria-labelledby="flush-headingOne" >
              <div className="accordion-body ">
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label text-secondary" forhtml="flexCheckDefault">
                  {t('Phone')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked">
                  {t('Video')}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <i className="fas fa-graduation-cap text-primary border-bottom border-danger me-2 ms-3 pb-1"></i><span className="text-primary"> {t('Title')}</span>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" >
              <div className="accordion-body">
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label text-secondary" forhtml="flexCheckDefault">
                  {t('Professor')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked">
                  {t('Lecturer')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckChecked2" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked2">
                  {t('Consultant')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckChecked3" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked3">
                  {t('Specialist')}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <i className="fas fa-venus-mars text-primary border-bottom border-danger me-2 ms-3 pb-1"></i><span className="text-primary"> {t('Gender')}</span>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" >
              <div className="accordion-body">
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label text-secondary" forhtml="flexCheckDefault">
                  {t('Female')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked">
                  {t('Male')}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                <i className="far fa-calendar-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i><span className="text-primary"> {t('Availability')}</span>
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" >
              <div className="accordion-body">
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckDefault-3-1"/>
                  <label className="form-check-label text-secondary" forhtml="flexCheckDefault-3-1">
                  {t('any_Day')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckChecked-3-2" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked-3-2">
                  {t('Today')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-4" type="checkbox" value="" id="flexCheckChecked-3-3" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked-3-3">
                  {t('Tomorrow')}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                <i className="fas fa-tag text-primary border-bottom border-danger me-2 ms-3 pb-1"></i><span className="text-primary"> {t('Promo_Codes')}</span>
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" >
              <div className="accordion-body">
                <div className="form-check">
                  <input className="form-check-input float-end ms-1" type="checkbox" value="" id="flexCheckChecked-4" />
                  <label className="form-check-label text-secondary " forhtml="flexCheckChecked-4">
                  {t('PromoCodes')}
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingSix">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                <i className="fas fa-money-bill-wave-alt text-primary border-bottom border-danger me-2 ms-3 pb-1"></i><span className="text-primary">{t('Examination_Fee')}</span>
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix">
              <div className="accordion-body">
                <div className="form-check">
                  <input className="form-check-input float-end ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
                  <label className="form-check-label text-secondary" forhtml="flexRadioDefault1">
                  {t('Any')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label text-secondary" forhtml="flexRadioDefault2">
                  {t('Less_than50')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                  <label className="form-check-label text-secondary" forhtml="flexRadioDefault3">
                  {t('From50to100')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                  <label className="form-check-label text-secondary" forhtml="flexRadioDefault4">
                  {t('From100to200')}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                  <label className="form-check-label text-secondary" forhtml="flexRadioDefault5">
                  {t('From200to300')} 
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input float-end ms-3" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                  <label className="form-check-label text-secondary " forhtml="flexRadioDefault6">
                  {t('Greater_than300')}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>     
     </div>
     
        </>
    )
}

export default AsideFilter;

import { useTranslation } from "react-i18next";

const Accordion=()=>{

  const { t } = useTranslation();

return(
    <>
    {/* <!------------------------------------LastAccordion ------------------------------------> */}
 <div className="border rounded-3  m-5 p-5 position-relative" style={{'overflowX': 'hidden'}}>
    <span className="badge rounded-pill bg-primary fs-5 mb-4 px-3 py-2">{t('Qes' )} <i className="fa-regular fa-circle-question mx-3 text-light fw-bold fs-3"></i></span>
  <div className="accordion accordion-flush" id="accordionFlushExample2">
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
        {t('ask1' )}
        </button>
      </h2>
      <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body">{t('asr1' )}</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo2">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2">
        {t('ask2' )}
        </button>
      </h2>
      <div id="flush-collapseTwo2" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo2" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body">{t('asr2' )}</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree2">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
        {t('ask3' )}
        </button>
      </h2>
      <div id="flush-collapseThree2" className="accordion-collapse collapse" aria-labelledby="flush-headingThree2" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body"> {t('asr3' )}</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingFour1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour1" aria-expanded="false" aria-controls="flush-collapseFour1">
        {t('ask4' )}
        </button>
      </h2>
      <div id="flush-collapseFour1" className="accordion-collapse collapse" aria-labelledby="flush-headingFour1" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body">{t('asr4' )}</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingFive1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive1" aria-expanded="false" aria-controls="flush-collapseFive1">
        {t('ask5' )}
        </button>
      </h2>
      <div id="flush-collapseFive1" className="accordion-collapse collapse " aria-labelledby="flush-headingFive1" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">{t('asr5' )}</div>
      </div>
    </div>
  </div>
</div>
    </>
)

}
export default Accordion;
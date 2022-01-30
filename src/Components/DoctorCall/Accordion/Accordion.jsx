

const Accordion=()=>{

return(
    <>
    {/* <!------------------------------------LastAccordion ------------------------------------> */}
 <div className="border rounded-3  m-5 p-5 position-relative" style={{'overflowX': 'hidden'}}>
    <span className="badge rounded-pill bg-primary fs-5 mb-4 px-3 py-2">الأسئلة المكررة</span>
  <div className="accordion accordion-flush" id="accordionFlushExample2">
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne1" aria-expanded="false" aria-controls="flush-collapseOne1">
         كيف أحجز كشف عبر مكالمة مع دكتور؟
        </button>
      </h2>
      <div id="flush-collapseOne1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body">Pفيزيتا تقدم خدمة مجانية لحجز الكشف عبر مكالمة هاتفية مع أفضل الدكاترة بكل سهولة. يمكنك أن تدخل على موقع أو تطبيق فيزيتا، وتقوم بالضغط على "مكالمة دكتور"، ابحث عن تخصص الدكتور، اختر "ابحث" واحجز الموعد الأنسب لك لتلقى كشفك عبر المكالمة واحجز مع أفضل الدكاترة فى أقل من دقيقة.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingTwo2">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo2" aria-expanded="false" aria-controls="flush-collapseTwo2">
          كيف أحجز كشف عبر مكالمة مع دكاترة الأعلى تصنيفاً على فيزيتا؟
        </button>
      </h2>
      <div id="flush-collapseTwo2" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo2" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body">يمكنك استخدام بحث فيزيتا للعثور على أفضل دكتور و ترتيب الدكاترة حسب الأعلى تصنيفاً من خلال تقييمات المرضى السابقين الذين قاموا بإتمام كشفهم عبر مكالمة، حيث أن في كل مرة يكمل فيها المريض موعد الاستشارة من على فيزيتا، تتم دعوته لمراجعة وتقييم تجربته بالكامل.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingThree2">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree2" aria-expanded="false" aria-controls="flush-collapseThree2">
          هل أستطيع حجز كشف عبر مكالمة مع دكتور حسب النوع ذكر أو أنثى ؟
        </button>
      </h2>
      <div id="flush-collapseThree2" className="accordion-collapse collapse" aria-labelledby="flush-headingThree2" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body">عند البحث عن دكاترة الذين يقدمون كشف عبر مكالمة هاتفية، تستطيع تحديد نتائج البحث الخاصة بك حسب الجنس، بالاضافة لمعايير بحث آخرى. وبهذه الطريقة، سيتم عرض الدكاترة الذين يطابقون تفضيلاتك فقط.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingFour1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour1" aria-expanded="false" aria-controls="flush-collapseFour1">
          كيف أحجز كشف عبر مكالمة في نفس اليوم مع دكتور؟
        </button>
      </h2>
      <div id="flush-collapseFour1" className="accordion-collapse collapse" aria-labelledby="flush-headingFour1" data-bs-parent="#accordionFlushExample2">
        <div className="accordion-body">تستطيع أن تدخل على موقع أو تطبيق فيزيتا وتقوم بالضغط على "مكالمة دكتور"، اختر تخصص الدكتور، ثم اختر "اليوم" من المواعيد المتاحة في محدد البحث أعلى الصفحة واحجز بكل سهولة.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingFive1">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive1" aria-expanded="false" aria-controls="flush-collapseFive1">
          هل أستطيع حجز كشف عبر مكالمة مع دكتور حسب اللقب ؟
        </button>
      </h2>
      <div id="flush-collapseFive1" className="accordion-collapse collapse " aria-labelledby="flush-headingFive1" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">عند البحث عن دكاترة الذين يقدمون كشف عبر مكالمة هاتفية، تستطيع تحديد نتائج البحث الخاصة بك حسب لقب الدكتور ودرجته العلمية، بالإضافة لمعايير بحث آخرى. وبهذه الطريقة، سيتم عرض الدكاترة الذين يطابقون تفضيلاتك فقط.</div>
      </div>
    </div>
  </div>
</div>
    </>
)

}
export default Accordion;
import AsideBooking from './../AsideBooking/AsideBooking'
import DctorInfo from './../DctorInfo/DctorInfo'
import './middlePartStyle.css'
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import{getSpecificDoc} from '../../../ReactRedux/Actions/DoctorCallAction'


const  MiddlePart=()=>{
  
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.getDoctors);
  const loader = useSelector((state) => state.loader.loader);
  const params=useParams();
   useEffect(() =>{
     dispatch( getSpecificDoc(params.name))
    console.log(doctor.specificDoc)
    
    //  doc=doctor.specificDoc
    // console.log(doc)
    
 
  } ,[params.name] )
  
  // console.log(doc)
  
//   const docArray = [

//     {
//         name: 'ثناء لبيب', Image: sanaa, Price: 60, Rate: 769, Department: 'استشارى أمراض نساء و توليد'
//         , Title: ' دكتورة  نساء وتوليد متخصص في جراحات تجميل نسائية، جراحة اورام نسائية',
//         Information: 'الكشف ﻻ يشمل الخدمات مثل السونار....استشارى نساء و توليد جامعة عين شمس ... السونار الثلاثى ﻻكتشاف تشوهات الجنين ...عﻻج حاﻻت اﻻجهاض المتكرر .و الحمل خارج الرحم . جراحات تجميل و تضييق المهبل بعد الولادة اخصائي حقن مجهرى و اطفال انابيب و جراحات المناظير و الوﻻدة الطبيعية و القيصرية و متابعة ما بعد الوﻻدة عﻻج العقم و تاخر اﻻنجاب و متابعة التبويض بالسونار.عﻻج تكيسات المبايض بالمنظار و عمليات تجميل المهبل بعد الوﻻدة الطبيعية. و جميع جراحات النساء و الكشف عن اورام الثدى و الغدد الليمفاوية تحت اﻻبطين'
//     },
//     {
//         name: 'مروة خفاجة', Image: marwa, Price: 150, Rate: 79, Department: 'استشارى نساء و التوليد والحقن المجهري والعقم',
//         Title: 'دكتورة نساء وتوليد متخصص في ولادة، جراحة اورام نسائية، حقن مجهري وعقم و امراض نساء وتوليد',
//         Information: 'استشاري امراض النساء و التوليد استشاري اطفال الانابيب والعقم زميل طب الجنين بوحدة طب الجنين بالقصر العيني'
//     },
//     {
//         name: 'آمال صبرى', Image: amal, Price: 150, Rate: 56, Department: ' دكتورة اطفال وحديثي الولادة متخصص في تخسيس وتغذية اطفال',
//         Title: 'استشاري طب الاطفال و حديثي الولادة و التغذية العلاجية',
//         Information: 'ماجستير طب الأطفال - القصر العيني , دبلومة تغذية علاجية - المعهد القومي للتغذية استشاري طب الاطفال و التغذية العلاجية و السمنة و النحافة لكل الأعمار عضوالجمعية المصرية العربية للتغذية الصحية و العلاجية المواعيد من ٧ الي ٩ مساء يوميا و ذلك لحجوزات كشف التغذية العلاجية و السمنة و النحافة'
//     },
//     {
//         name: 'عبدالمحسن ديغم', Image: abdelmohsen, Price: 150, Rate: 524, Department: 'استشاري العلاج النفسي و علاج الادمان',
//         Title: 'دكتور نفسي متخصص في نفسي اطفال، نفسي بالغين، استشارات اسرية و علاج الادمان',
//         Information: 'علاج صعوبات التعليم و مشكلات التحصيل الدراسي. علاج اضطراب ضعف الانتباه و فرط التركيز ( ADHD) قياس و تقييم الذكاء بالاختبارات النفسية المتخصصة اعادة التأهيل السلوكي و النفسي للأطفال و المراهقين و ذوي المشاكل السلوكية علاج حالات الاكتئاب و القلق دكتوراه العلاج النفسي جامعة عين شمس عضو الجمعية الملكية للتشريع و القانون رابطة الأخصائيين النفسيين'
//     },
//     {
//         name: 'سعيد ابراهيم محمد', Image: saied, Price: 30, Rate: 102, Department: 'استشاري الاطفال و حديثي الولادة',
//         Title: ' دكتور اطفال وحديثي الولادة متخصص في مخ واعصاب اطفال، نفسي اطفال، روماتيزم اطفال ',
//         Information: 'استشاري طب الاطفال و حديثي الولادة ماجستير طب الاطفال من جامعة عين شمس خبرة ٣٥ سنة فى طب الباطنة و الاطفال استشاري الاطفال والباطنة بعيادات التامين الصحي اشراف طبي مدارس مودرن سكول'
//     },
//     {
//         name: 'احمد صلاح سليمان', Image: ahmed, Price: 400, Rate: 197, Department: 'دكتوراه واستشاري امراض امراض القلب و الاوعية الدموية ',
//         Title: ' دكتور  قلب واوعية دموية متخصص في قلب بالغين، اوعية دموية بالغين و قلب اطفال',
//         Information: 'ليه في مركز د/احمد صلاح انت دايما في امان : خبره أكثر من 16 سنه في مجال امراض القلب والأوعية الدموية دكتوراه واستشاري امراض القلب والأوعية الدموية عضو الجمعيه الامريكيه للقلب عضو الجمعيه الأوروبية للقسطرة التداخلية أجرى الالآف من حالات عمليات القساطر التداخلية والتشخيصيه اعطاء الوقت الكافي لكل مريض مع الاهتمام بأدق التفاصيل التي تخص حالته الكشف بأحدث أجهزة القلب والأوعية الدموية مع استلام فوري لجميع النتائج للحجز والإستعلام ٠١١٥٦٦١١٣٤٢/ ٠١٢١١٨١٠٩٦٠'
//     },
//     {
//         name: 'طارق ماجد السقطى', Image: tarek, Price: 150, Rate: 916, Department: 'أستاذ و رئيس قسم الباطنة العامة و الجهاز الهضمي و المناظير',
//         Title: ' دكتور باطنة متخصص في كبد بالغين، سكر وغدد صماء بالغين ',
//         Information: 'مناظير القولون و القناة المرارية - بالون المعدة - توسيع المرئ - ربط الدوالى أستاذ و رئيس قسم أمراض الباطنة العامة و الجهاز الهضمي و الكبد - جامعة عين شمس * مدير وحدة مناظير الجهاز الهضمى - كلية الطب جامعة عين شمس * استشارى أمراض الجهاز الهضمى بمستشفى كليوبترا *'
//     },
//     {
//         name: 'رباب نبيل', Image: Rabab, Price: 150, Rate: 97, Department: 'استشاري التغذية العلاجية و سمنة والنحافة',
//         Title: ' دكتورة  تخسيس وتغذية متخصص في تخسيس وتغذية اطفال، تخسيس وتغذية بالغين',
//         Information: 'عضو الجمعية الاوروبية للتغذية العلاجية/ متابعة التغذية العلاجية للحوامل ما قبل و اثناء و بعد فترة الحمل و الولادة/ التغذية للأطفال و البالغين/ ضبط مستوي السكر و ضغط الدم بالتغذية العلاجية/ نظام غذائي لعلاج الكانديدا (الفطريات)'
//     }
// ]
// const testName=useState(docArray)
  // console.log(params)
  // console.log(testName[0])
//   let data=testName[0]
//  let doc= data.filter((d)=>d.name===params.name)
 //console.log(doc)
return(
    <>
    
    {/* {doctor.length>0? */}
     <div className="row second " style={{"margin":"0"}}>
        <nav aria-label="breadcrumb" id="brcrumb">
          <ol className="breadcrumb ">
            <li className="breadcrumb-item mt-2 me-5 ms-1"><a href="#" className="text-decoration-none">فيزيتا</a></li>
            <li className="breadcrumb-item active mt-2" aria-current="page">دكتور {params.name}</li>
          </ol>
        </nav>
        {/* {loader && (
        <div className="d-flex justify-content-center mt-0">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )} */}
    <DctorInfo info={doctor.specificDoc} />
    
    <AsideBooking mony={doctor.specificDoc}/>
    
    </div>
      {/* :
    <p>pending</p>}  */}
    </>
  )


   }

export default MiddlePart
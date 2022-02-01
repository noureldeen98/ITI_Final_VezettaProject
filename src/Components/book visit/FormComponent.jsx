import React, { useState } from 'react';
import style from './Form.module.css';
export default function FormComponent() {
    const deptArr = ['باطنة', 'علاج طبيعي' , 'قلب واوعية دموية', 'اطفال وحديثي الولادة',
                    'عظام', 'صدر وجهاز تنفسي', 'مخ واعصاب', 'جراحة عامة'];
    const areasArr = ['هليوبليس , مدينة نصر', 'القاهرة الجديدة , الرحاب , الشروق , مدينتى', '', '' ,'',
                    'الدقي والمهندسين , الزمالك , العجوزة', 'السادس من اكتوبر , زايد', 
                    'هرم , فيصل , حدائق الاهرام', 'المعادي , المقطم',
                    'المنيل , وسط البلد , شبرا', 'المنصورة', 'الزقازيق', 'رشدي , سموحة', 
                    'ميامي , سيدي بشر , العصافرة', 'الابراهيمية ومحطة الرمل'];
    const [deptState, setDeptState] = useState(deptArr);
    const [areasState, setAreasState] = useState(areasArr);
    return <>
    <div className="col-lg-5 col-md-6 col-12 order-2 order-md-1">
        <form>
            <div className={style.header}>
                <h5>ادخل بياناتك وسيتم التواصل معك خلال دقائق </h5>
            </div>
            <div className="mb-3">
                <label for="name" className="form-label">الاسم</label>
                <input type="text" className="form-control" id="name" 
                placeholder="الاسم"/>
            </div>
            <div className="mb-3">
                <label for="mobile" className="form-label">رقم التليفون</label>
                <input type="text" className="form-control" id="mobile" 
                placeholder="رقم التليفون"/>
            </div>
            <div className={`mb-3 ${style.dropdown}`}>
                <label for="type" className="form-label">التخصص</label>
                <div className={style.dropdown}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        اختر التخصص
                    </button>
                    <ul className="dropdown-menu">
                        {deptState.map((el, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#">{el}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`mb-3 ${style.dropdown}`}>
                <label for="type" className="form-label">المنطقة</label> 
                <div className={style.dropdown}>
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        اختر المنطقة
                    </button>
                    <ul className="dropdown-menu">
                        {areasState.map((el, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#"> {el}</a>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            <button type="submit" className="btn btn-danger">تاكيد</button>
        </form>
    </div>
    </>;
}

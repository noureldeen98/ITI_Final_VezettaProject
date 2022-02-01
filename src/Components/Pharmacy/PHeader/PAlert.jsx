import React from 'react';

export default function PAlert() {
    return <div>
        <header id="header2" class="header2 row">
            <p class="col-11">جميع الأدوية يتم صرفها من صيدليات مرخصة من وزارة الصحة بجمهورية مصر العربية</p>
            <button onclick="close_head()" type="button" class="close" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
        </header>
    </div>;
}

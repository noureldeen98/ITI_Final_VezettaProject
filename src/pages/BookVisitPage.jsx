import React from 'react';
import DataComponent from '../Components/book visit/DataComponent';
import FormComponent from '../Components/book visit/FormComponent';
import BookFooter from '../Components/book visit/BookFooter';
import PicComponent from '../Components/book visit/PicComponent';

export default function BookVisitPage() {
  return <> 
  <div style={{'width': '100%', 'overflowX': 'hidden'}} className="visitForm">
    <div className="container-fluid">
      <div className="row justify-content-center d-flex">
        <FormComponent />
        <PicComponent />
      </div>
      <DataComponent />
      <BookFooter />
    </div>
  </div>
  </>;
}

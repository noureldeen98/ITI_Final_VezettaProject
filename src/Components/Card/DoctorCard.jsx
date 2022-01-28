import {db} from '../../FireBaseConfiguration/FirebaseConfiguration';
import { useState } from 'react';

const Doctorcard=()=>{

    const [doctor , setDoctor] = useState([]);
  console.log(doctor.Name);
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("/Doctors_Collection/WOB3F9GigX8UX0O1v8zE/General_internal_medicine_specialist/").get().then((resolved) => {
             
            // Loop through the data and store
            // it in array to display
            resolved.forEach(element => {
                var data = element.data();
                setDoctor(arr => [...arr , data]);
                  
            });
        })
    }
      
    // Display the result on the page
    
    return(
        <>
        {
            doctor.map((eachDoctor)=>{
                return(
                    <div className="card mb-3" >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={eachDoctor.Image} className="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{eachDoctor.Name}</h5>
                          <p className="card-text">{eachDoctor.Title}</p>
                          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
        }
        </>

    )
}

export default Doctorcard;

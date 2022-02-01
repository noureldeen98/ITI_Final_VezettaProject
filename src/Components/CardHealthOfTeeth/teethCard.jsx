const CardOfTeeth = (props) => {

    let recievedData = props;
  return (
      <>
      {recievedData.theDataOfAdvitisement.map((eachAdvertise)=>{
          console.log(eachAdvertise);
          return(
        <div key={eachAdvertise.id} className="card m-2 " style={{ width: "20rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {eachAdvertise.TitleOfCard}</h5>
          <p className="card-text">Description</p>
          <p>
            <ul className="listOfStars ">
              <li style={{color: "orange"}}>
                <i className="fas fa-star"></i>
              </li>
              <li style={{color: "orange"}}>
                <i className="fas fa-star"></i>
              </li>
              <li style={{color: "orange"}}>
                <i className="fas fa-star"></i>
              </li>
              <li style={{color: "orange"}}>
                <i className="fas fa-star"></i>
              </li>
              <li style={{color: "orange"}}>
                <i className="fas fa-star"></i>
                <span style={{color: "black"}}>
                  (384) | Resevartion حجز{" "}
                </span>
              </li>
            </ul>
          </p>
  
          <p>
            <span style={{textDecoration: "lineThrough", marginLeft: "5px"}}>
              400 جنيه
            </span>
            <span style={{color: "greenyellow"}}>ستوفر Price جنيه</span>
            <span className="me-5">
              <a href="#" className="btn btn-primary">
                احجز الان
              </a>
            </span>
          </p>
        </div>
      </div>
          )
      })}
      
      </>
  );
};

export default CardOfTeeth;

import React from "react";
//

const Space = (props) => {
  return (
      <div className="col-4">
    <div className="card" onClick={() => props.onclick(props.space.id)} >
      <img src="..." className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.space.name}</h5>
        <p className="card-text">{props.space.address}</p>
      </div>
    </div>
    </div>
  );
};

export default Space;

import React from 'react';

const Team = ({member}) => {
  return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-auto mb-auto">        
              <img src={member.img} alt={member.name} height="200px" width="200px"/>
          </div>
          <div className="col">
              <h4 className="headfont"><u>{member.name}</u></h4>           
              <h6 className="headfont mt-3">{member.role}</h6>
              <br/>
              <br/> 
              <p className="text-justify bodyfont">{member.description}</p>
          </div>
        </div>
      </div>
  );
};

export default Team;
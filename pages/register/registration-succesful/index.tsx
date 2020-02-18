import React from 'react';
import './styles.scss';


export default function RegistrationSuccesful() {

function  handleRouteLog(){ 
    window.location.href="/login";
  } 

  return(
<div className="container-success">
  <h1 className="head">Congratulations!! your registration was successful.</h1>
  <p className="SubTitle">Let's discuss transport</p>
  <br />
  <button type="submit" className="btnAll" onClick={handleRouteLog}>Login</button>
</div>
);
}

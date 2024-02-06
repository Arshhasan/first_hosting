import React from 'react';
import { Link } from 'react-router-dom';



export default function NavBar(props) {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`} >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/textform">Home</a>
                <a className="nav-link active" aria-current="page" href="/about">About</a>

                {/* <link className="nav-link" to="About.js">About</link> */}
                
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </div>              
            </div>
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='dark'?'light':'dark'} mode`}</label>
            </div>
            <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='dark'?'light':'dark'} mode`}</label>
            </div>
          </div>
      </nav>
    </div>
  );
}

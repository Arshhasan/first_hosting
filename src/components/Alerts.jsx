import React from 'react';
function capitalize(s)
    {
        return s && s[0].toUpperCase() + s.slice(1);
    }

export default function Alerts(props) {
  return (
    
  
       props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
                </div>


    
   
  );
}

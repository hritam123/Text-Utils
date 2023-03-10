import React from 'react'

function Alert(props) {
   
if(props.alert){
return (
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    </div>
)
}
}

export default Alert

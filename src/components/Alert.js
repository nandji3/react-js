import React from 'react'

export default function Alert(props) {

    const capitalize = (str) => {
        const word = str.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div className="mt-2" style={{ height: "50px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx=3`} role="alert" >
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg} !
            </div >}
        </div>
    )
}


import React from 'react'

export default function Alert(props) {

    const capitalize = (str) => {
        const word = str.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show mx=3`} role="alert" >
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg} !
        </div >
    )
}


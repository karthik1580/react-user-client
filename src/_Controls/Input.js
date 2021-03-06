import React from 'react';

export default function Input(props) {
    const {name, label, value, onChange} = props
    return(
        <div className={"form-group"}>
            <label for="email">Email address:</label>
            <input type="email" className={"form-control"} id="email" />
        </div>  
    )
}

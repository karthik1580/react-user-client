import React from "react";


const Footer = props => {
    return (
        <footer className={'footer'}>
            <div className="container-fluid">
                <div className={["has-text-centered"].join(" ")}>
                <h1>Footer</h1>
                {props && props.copyright} ©{" Footer"}
                </div>
            </div>
        </footer>
    )
}
export default Footer;
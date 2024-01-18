import React from "react";
import "./Head.css";
const Head=(props)=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="header col-lg-12 col-md-12 col-sm-12">
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    )
    
}

export default Head;
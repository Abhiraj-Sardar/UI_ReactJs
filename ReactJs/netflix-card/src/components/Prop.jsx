import React from "react";

const Prop = ({img,name,desc,btn,url}) =>{
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card1">
                            <img src={img} alt={img} height={'180px'} width={'100%'}></img>

                            <h3>{name}</h3>
                            <span>{desc}</span>
                            <div className="btn">
                                <a href={url}>
                                    <button>{btn}</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prop
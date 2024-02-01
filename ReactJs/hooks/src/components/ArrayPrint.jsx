import React, { useState } from "react";
import Array from "./Array";

const ArrayPrint = () =>{

    const [item] = useState(Array)

    return(
        <>
            <div className="container-fluid">
                <h4 className="text-center pt-3">Food Menu Items</h4><hr></hr>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center menu-btn">
                        <button className="btn btn-warning">All Food</button>
                        <button className="btn btn-warning">Fast Food</button>
                        <button className="btn btn-warning">Break Fast</button>
                        <button className="btn btn-warning">Lunch</button>
                        <button className="btn btn-warning">Dinner</button>
                        <button className="btn btn-warning">Veg</button>
                        <button className="btn btn-warning">Non Veg</button>
                        <button className="btn btn-warning">Tea</button>
                        <button className="btn btn-warning">Coffee</button>
                    </div>
                </div>

                <div className="row mt-4">
                    {
                        item.map((elem) =>{
                            const{img,name,category,price,btn} = elem
                            return(
                                <div className="col-12 col-md-3 mt-3">
                                    <div className="card1">
                                        <div className="left-card">
                                            <img src={img} alt={img} height={'120px'} width={'100%'}></img>
                                        </div>
                                        <div className="right-card">
                                            <h3>{name}</h3>
                                            <span>{category}</span>

                                            <div className="d-flex btn">
                                                <h6>Price : Rs. {price}</h6>
                                                <a href="#">
                                                    <button className="badge badge-success">{btn}</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ArrayPrint
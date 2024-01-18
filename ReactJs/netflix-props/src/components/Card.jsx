import React from 'react'
import "./Card.css";
import movie1 from "../img/movie1.jpg";
const Card = (props) => {
    return (
        <div className='row'>
            <div className="col-md-3 col-sm-3">
                <div class="card">
                    <img src={props.banner} class="card-img-top" alt="..."/>
                        <div class="content">
                            <h5 class="title">{props.title}</h5>
                            <p class="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Watch Now</a>
                        </div>
                </div>
            </div>            
        </div>
    )
}

export default Card;
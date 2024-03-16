import React from "react";
import {Link} from "react-router-dom";
function Entry(props){
    return(
        <div className="col-6 col-sm-3 mt-3 d-flex justify-content-center box">
            <div className="row d-flex justify-content-center">
                <div className="col-10 col-md-12 d-flex justify-content-center">
                    <img className="image img-fluid rounded" src={props.image} alt="Mood" />
                </div>
                <div className="col-10 col-md-12 mt-1 d-flex justify-content-center align-items-center text-center title">
                   <p>{props.title}</p>
                </div>
                <div className="col-10 col-md-12 text-center summary">
                  <p>{props.summary}</p>
                </div>
                <div className="col-10 col-md-12 d-flex justify-content-center">
                    {/* <p>{props.id}</p> */}
                    <Link to={`/info/${props.id}`}>
                        <button className="selectMood" type="submit">Select</button>
                    </Link>
                </div>
            </div>

        </div>
    );

}
export default Entry;
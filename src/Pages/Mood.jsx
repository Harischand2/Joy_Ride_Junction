import React from "react";
import Entry from "../components/Entry";
import Mood_list from "../components/Mood_list";
import Footer from "../components/Footer";

function getEntry(info){
    return(
        <Entry
         key={info.id}
         id={info.id}  
         title={info.title}
         image = {info.image}
         summary={info.summary}
         steps_to_achieve = {info.steps_to_achieve}
         why_matters = {info.why_matters}
         quote = {info.quote}
         />
    );
}

function Mood(){
    return(
        <div className="container-fluid mood_container">
            <div className="row d-flex justify-content-center">
                <div className="col-12 mood_header text-center">
                <h1>Select A Mood</h1>
                </div>
                {Mood_list.map(getEntry)}
            </div>
          <Footer/>
        </div>
    );
}
export default Mood;
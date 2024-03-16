import React from "react";
import Mood_list from "../components/Mood_list";
import "../styles/content.css";
import img_quote from "../Images/Quote.png";
function listItem(item, index) {
  return (
    <p key={index}>
      <b>Step {index + 1}:</b> {item}
    </p>
  );
}

function Content({ element_id }) {
  return (
    <div className="col-12">
      {/* Container for Title */}
      <div className="row h_title">
        <div className="col-12 mb-5 mt-2 text-center">
          <h1>About {Mood_list[element_id - 1]["title"]}</h1>
        </div>
      </div>
      {/* Container for Why it matters */}
      <div className="row y_matter">
        <div className="col-auto">
          <h3>Why does it matters?</h3>
        </div>
        <div className="col-auto p_m">
          {Mood_list[element_id - 1]["why_matters"]}
        </div>
      </div>

      {/* Container for steps */}
      <div className="row a_steps">
        <div className="col-12">
          <h3>How to achieve it?</h3>
        </div>
        <div className="col-12 s_a">
          {Mood_list[element_id - 1]["steps_to_achieve"].map(listItem)}
        </div>
      </div>
      {/* Container for quote */}
      <div className="row quote">
        <div className="col-12 col_q">
          <img  className="img_q" src={img_quote} alt="leftquote" />
          <p className="q_">" {Mood_list[element_id - 1]["quote"]} "</p>
          <p className="author">{Mood_list[element_id - 1]["quote_author"]}</p>
        </div>
      </div>
    </div>
  );
}

export default Content;

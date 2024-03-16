import React from "react";
import GreetingList from "../components/GreetingList";
import GetStarted  from "../components/HomeBTN"; 
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container-fluid home d-flex justify-content-center align-items-center">
      <div className="row d-flex text-center justify-content-center home_row">
        <div className="col-12">
          <h1>Welcome!</h1>
        </div>
        <div className="col-6">
          <GreetingList />
        </div>
        <div className="col-7">
            <GetStarted/>
        </div>
      </div>
 
    </div>
  );
}
export default Home;

import React from "react";
import "./style.css";
import CreateUser  from "../Form/CreateUser";
function Home() {
  return (
    <>
     <div className="container">
      <h1> Welcome to You</h1>
      <CreateUser />
     </div>
    </>
  );
}

export default Home;
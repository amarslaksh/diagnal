import React from "react";
import "./App.css";
import Navbar from "./components/Containers/Navbar";
import ContentListingPage from "./components/pages/ContentListingPage";
function App() {

  return (
    <div className="App">
      <Navbar onBack={() => console.log("Back clicked")} />
      <ContentListingPage/>
    </div>
  );
}

export default App;

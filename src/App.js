import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import About from "./Custom Components/About";
import Navbar from "./Custom Components/Navbar";
import TextForm from "./Custom Components/TextForm";
import React, { useState } from "react";
import Alert from "./Custom Components/Alert";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null); // We want to create a alert as a <object data="

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Text Utils - Dark Mode";

      /*setInterval(() => {
        document.title = "Text Utils is amazing";
      }, 2000);
      setInterval(() => {
        document.title = "Install Text Utils now";
      }, 4000);
      This piece of code is only plugged in here to demonstrate how tab name changes dynamically.*/
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  };

  return (
    <>
      {/*<Router>*/}
        <Navbar title="TextUtils.blog" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm
                  heading="Enter Your Text To Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
          {/*<Routes>
            <Route
             exact path="/"
              element={
                <TextForm
                  heading="Enter Your Text To Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>*/}
        </div>
      {/*</Router>*/}
    </>
  );
}

export default App;

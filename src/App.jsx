import { Component } from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import MainComponent from "./components/MainComponent";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <MainComponent />
      </>
    );
  }
}

export default App;

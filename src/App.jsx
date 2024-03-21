import { Component } from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import MainComponent from "./components/MainComponent";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Table />
      </>
    );
  }
}

export default App;

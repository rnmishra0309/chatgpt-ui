import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Header,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Footer,
} from "./containers";
import { CallToAction, Brand, Navbar } from "./components";
import "./App.css";
import "./index.css";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let response = await axios.get("https://randomuser.me/api/?results=50");
      return response.data;
    }
    const response = fetchPeople();
    response.then((result) => setPeople(result.results));
  }, []);

  return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header people={people} />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CallToAction />
        <Blog />
        <Footer />
      </div>
  );
};

export default App;

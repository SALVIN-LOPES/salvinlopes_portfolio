import React from "react";

import {
  About,
  Work,
  Skills,
  Testimonial,
  Header,
  Footer,
} from "./container/index";

import { Navbar } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
    </div>
  );
};

export default App;

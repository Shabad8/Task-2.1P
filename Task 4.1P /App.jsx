import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import Tutorials from "./components/Tutorials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Articles />
      <Tutorials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;

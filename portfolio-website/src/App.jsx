import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <section
        id="about"
        style={{ height: "100vh", padding: "2rem"}}
      >
        <h1>About Section</h1>
        <p>This is the about section of the website.</p>
      </section>

      <section id="projects" style={{ height: "100vh", padding: "2rem", backgroundColor: "#f0f0f0"  }}>
        <h1>Projects Section</h1>
        <p>Welcome to my website!</p>
      </section>

      <section id="experience" style={{ height: "100vh", padding: "2rem" }}>
        <h1>Experience Section</h1>
        <p>Get in touch!</p>
      </section>

      <section
        id="certifications"
        style={{ height: "100vh", padding: "2rem", backgroundColor: "#f0f0f0" }}
      >
        <h1>Certifications Section</h1>
        <p>This is the about section of the website.</p>
      </section>

      <section id="contact" style={{ height: "100vh", padding: "2rem" }}>
        <h1>Contact Section</h1>
        <p>Get in touch!</p>
      </section>

      <ScrollToTop />
    </>
  );
}

export default App;

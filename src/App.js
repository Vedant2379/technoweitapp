import "./App.css";
import NavBar from "./Componants/NavBar";
import Home from "./Componants/Home";
import Features from "./Componants/Features";
import About from "./Componants/About";

import "bootstrap/dist/css/bootstrap.min.css"
import "react-owl-carousel2/lib/styles.css"

import "font-awesome/css/font-awesome.min.css"
import Courses from "./Componants/Courses";
import Testimonials from "./Componants/Testimonials";
import ContactUs from "./Componants/ContactUs";
import Footer from "./Componants/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Features />
      <About/>
      <Courses/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

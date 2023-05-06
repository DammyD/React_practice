import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";

// Building a website with Home | About Us | Contact Us pages

function App() {
  // useRoutes Approach

  //   const routes = [
  //     { path: "/", element: <Home /> },
  //     { path: "/about", element: <About /> },
  //     { path: "/contact", element: <Contact /> },
  //     { path: "*", element: <NotFound /> }
  // ];

  //   let routesElememt = useRoutes(routes);
  //   return routesElememt;

  // <Routes> and </Routes> component Approach
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* wildcard */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

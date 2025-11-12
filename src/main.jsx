import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Pages
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Resume from "./pages/Resume.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      { path: "portfolio", element: <Portfolio /> },
      { path: "portfolio/:slug", element: <Project /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

// STEP 1: Render our App component (which is the default export from App.jsx)
// - Wrap in StrictMode to help catch potential problems
// - Wrap in BrowserRouter to enable routing (not used in this simple demo, but good practice)
//   - BrowserRouter uses the HTML5 history API (pushState, replaceState and the popstate event)
//     to keep your UI in sync with the URL

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

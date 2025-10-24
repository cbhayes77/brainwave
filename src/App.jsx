// STEP 1: Pull in React's useState hook so the UI can react to user choices
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";

// STEP 2: Define and export our main component (default export so main.jsx can import it)
function App() {
  return (
    <>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        {/* Main content and footer will go here */}
        <Outlet />
      </div>
    </>
  );
}

export default App;

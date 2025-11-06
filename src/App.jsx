// STEP 1: Pull in React's useState hook so the UI can react to user choices
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

// STEP 2: Define and export our main component (default export so main.jsx can import it)
export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Main content and footer will go here */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

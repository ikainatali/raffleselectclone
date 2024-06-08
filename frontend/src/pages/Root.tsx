import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <body className="flex flex-col h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
};

export default Root;

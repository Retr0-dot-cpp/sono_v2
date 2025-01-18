import { Outlet } from "react-router";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

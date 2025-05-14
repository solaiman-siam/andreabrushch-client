import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

function MainLayout() {
  return (
    <div className="font-lexend">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;

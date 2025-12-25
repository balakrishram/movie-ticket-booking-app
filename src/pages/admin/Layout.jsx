import { Outlet } from "react-router-dom";
import { AdminNavbar } from "../../components/admin/AdminNavbar";
import { AdminSidebar } from "../../components/admin/AdminSidebar";

export function Layout() {
  return (
    <>
      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 px-4 py-10 md:px-10 h-[cal(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
      </div>    
    </>
  )
}
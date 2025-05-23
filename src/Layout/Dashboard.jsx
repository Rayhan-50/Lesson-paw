

// import { useState, useContext } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import {
//   FaBars, FaTimes, FaUser, FaTasks, FaHome, FaUserPlus,
//   FaBell, FaBook, FaCheckCircle, FaMapMarkerAlt, FaMoneyBillWave,
//   FaChartBar, FaBriefcase, FaEdit, FaPlusCircle, FaSignOutAlt
// } from "react-icons/fa";

// import useAdmin from "../hooks/UseAdmin";
// import useTeacher from "../hooks/UseTeacher";
// import Swal from "sweetalert2";
// import { AuthContext } from "../providers/AuthProvider";

// const Dashboard = () => {
//   const { user, logOut} = useContext(AuthContext);
//   const [isTeacher] = useTeacher();
//   const [isAdmin] = useAdmin();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//  const handleLogout = () => {
//   logOut()
//     .then(() => {
//       Swal.fire({
//         icon: "success",
//         title: "Logged Out",
//         text: "You have successfully logged out.",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//       navigate("/");
//     })
//     .catch((error) => {
//       console.error("Logout error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Logout Failed",
//         text: "Something went wrong while logging out.",
//         confirmButtonText: "Try Again",
//       });
//     });
// };


//   const renderNavLink = (to, icon, label) => (
//     <li>
//       <NavLink
//         to={to}
//         onClick={closeSidebar}
//         className={({ isActive }) =>
//           `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-yellow-300 hover:text-black ${
//             isActive ? "bg-yellow-300 text-black" : "text-white"
//           }`
//         }
//       >
//         {icon}
//         <span className="text-sm font-medium">{label}</span>
//       </NavLink>
//     </li>
//   );

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Mobile Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-md shadow-lg"
//         aria-label="Toggle Sidebar"
//       >
//         <FaBars />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed md:relative bg-primary text-white h-full w-64 transition-all duration-300 ease-in-out z-40 p-5 shadow-lg ${
//           sidebarOpen ? "left-0" : "-left-64"
//         } md:left-0 overflow-y-auto`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold tracking-wide">Dashboard</h2>
//           <button
//             onClick={closeSidebar}
//             className="md:hidden text-xl"
//             aria-label="Close Sidebar"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul className="space-y-2">
//           {/* Student Routes */}
//           {user && !isAdmin && !isTeacher && (
//             <>
//               {renderNavLink("/dashboard/studentProfile", <FaUser />, "Profile")}
//               {renderNavLink("/dashboard/my-bookings", <FaUser />, "My Bookings")}
//               {renderNavLink("/dashboard/joinTeacher", <FaUser />, "Join as a Teacher")}
             
//               {renderNavLink("/dashboard/post-job", <FaPlusCircle />, "Post Job")}
//             </>
//           )}

//           {/* Teacher Routes */}
//           {user && isTeacher && (
//             <>
//               {renderNavLink("/dashboard/teacherProfile", <FaUser />, "Manage Profile")}
//               {renderNavLink("/dashboard/tutor-jobs", <FaBriefcase />, "Available Jobs")}
//               {renderNavLink("/dashboard/manage-services", <FaEdit />, "Manage Services")}
//             </>
//           )}

//           {/* Admin Routes */}
//           {user && isAdmin && (
//             <>
//               {renderNavLink("/dashboard/manage-users", <FaTasks />, "Manage Users")}
//               {renderNavLink("/dashboard/tutors", <FaUser />, "All Tutors")}
//               {renderNavLink("/dashboard/message", <FaHome />, "Show Messages")}
//               {renderNavLink("/dashboard/add-tutor", <FaUserPlus />, "Add Tutor")}
//               {renderNavLink("/dashboard/teacher-applications", <FaCheckCircle />, "Teacher Applications")}
//               {renderNavLink("/dashboard/manage-payments", <FaMoneyBillWave />, "Manage Payments")}
//               {renderNavLink("/dashboard/admin-analytics", <FaChartBar />, "Analytics")}
//               {renderNavLink("/dashboard/students", <FaBell />, "Students")}
//               {renderNavLink("/dashboard/all-jobs", <FaPlusCircle />, "Show All Jobs")}
//               {renderNavLink("/dashboard/service", <FaPlusCircle />, "Show All services")}
//             </>
//           )}

//           <hr className="border-gray-400 my-4" />

//           {/* Logout Button */}
//           <li>
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-yellow-300 hover:text-black text-white"
//             >
//               <FaSignOutAlt />
//               <span className="text-sm font-medium">Logout</span>
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       {/* <main className="flex-1 overflow-auto p-4 md:ml-60">
//         <div className="bg-white shadow-md rounded-md p-4 h-full">
//           <Outlet />
//         </div>
//       </main> */}
//       <main className="flex-1 overflow-auto">
//   <div className="bg-white  rounded-md p-4 h-full">
//     <Outlet />
//   </div>
// </main>

//     </div>
//   );
// };

// export default Dashboard;



// import { useState, useContext, useEffect } from "react";
// import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
// import {
//   FaBars, FaTimes, FaUser, FaTasks, FaHome, FaUserPlus,
//   FaBell, FaBook, FaCheckCircle, FaMapMarkerAlt, FaMoneyBillWave,
//   FaChartBar, FaBriefcase, FaEdit, FaPlusCircle, FaSignOutAlt
// } from "react-icons/fa";

// import useAdmin from "../hooks/UseAdmin";
// import useTeacher from "../hooks/UseTeacher";
// import Swal from "sweetalert2";
// import { AuthContext } from "../providers/AuthProvider";

// const Dashboard = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isTeacher] = useTeacher();
//   const [isAdmin] = useAdmin();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // 👇 Auto redirect logic
//   useEffect(() => {
//     if (location.pathname === "/dashboard") {
//       if (isAdmin) {
//         navigate("/dashboard/manage-users");
//       } else if (isTeacher) {
//         navigate("/dashboard/teacherProfile");
//       } else {
//         navigate("/dashboard/studentProfile");
//       }
//     }
//   }, [isAdmin, isTeacher, navigate, location.pathname]);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           icon: "success",
//           title: "Logged Out",
//           text: "You have successfully logged out.",
//           showConfirmButton: false,
//           timer: 2000,
//         });
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//         Swal.fire({
//           icon: "error",
//           title: "Logout Failed",
//           text: "Something went wrong while logging out.",
//           confirmButtonText: "Try Again",
//         });
//       });
//   };

//   const renderNavLink = (to, icon, label) => (
//     <li>
//       <NavLink
//         to={to}
//         onClick={closeSidebar}
//         className={({ isActive }) =>
//           `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-yellow-300 hover:text-black ${
//             isActive ? "bg-yellow-300 text-black" : "text-white"
//           }`
//         }
//       >
//         {icon}
//         <span className="text-sm font-medium">{label}</span>
//       </NavLink>
//     </li>
//   );

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Mobile Toggle Button */}
//       <button
//         onClick={toggleSidebar}
//         className="md:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-md shadow-lg"
//         aria-label="Toggle Sidebar"
//       >
//         <FaBars />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed md:relative bg-primary text-white h-full w-64 transition-all duration-300 ease-in-out z-40 p-5 shadow-lg ${
//           sidebarOpen ? "left-0" : "-left-64"
//         } md:left-0 overflow-y-auto`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold tracking-wide">Dashboard</h2>
//           <button
//             onClick={closeSidebar}
//             className="md:hidden text-xl"
//             aria-label="Close Sidebar"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul className="space-y-2">
//           {user && !isAdmin && !isTeacher && (
//             <>
//               {renderNavLink("/dashboard/studentProfile", <FaUser />, "Profile")}
//               {renderNavLink("/dashboard/my-bookings", <FaBook />, "My Bookings")}
//               {renderNavLink("/dashboard/joinTeacher", <FaUserPlus />, "Join as a Teacher")}
//               {renderNavLink("/dashboard/post-job", <FaPlusCircle />, "Post Job")}
//             </>
//           )}

//           {user && isTeacher && (
//             <>
//               {renderNavLink("/dashboard/teacherProfile", <FaUser />, "Manage Profile")}
//               {renderNavLink("/dashboard/tutor-jobs", <FaBriefcase />, "Available Jobs")}
//               {renderNavLink("/dashboard/manage-services", <FaEdit />, "Manage Services")}
//             </>
//           )}

//           {user && isAdmin && (
//             <>
//               {renderNavLink("/dashboard/manage-users", <FaTasks />, "Manage Users")}
//               {renderNavLink("/dashboard/tutors", <FaUser />, "All Tutors")}
//               {renderNavLink("/dashboard/message", <FaHome />, "Show Messages")}
//               {renderNavLink("/dashboard/add-tutor", <FaUserPlus />, "Add Tutor")}
//               {renderNavLink("/dashboard/teacher-applications", <FaCheckCircle />, "Teacher Applications")}
//               {renderNavLink("/dashboard/manage-payments", <FaMoneyBillWave />, "Manage Payments")}
//               {renderNavLink("/dashboard/admin-analytics", <FaChartBar />, "Analytics")}
//               {renderNavLink("/dashboard/students", <FaBell />, "Students")}
//               {renderNavLink("/dashboard/all-jobs", <FaPlusCircle />, "Show All Jobs")}
//               {renderNavLink("/dashboard/service", <FaPlusCircle />, "Show All Services")}
//             </>
//           )}

//           <hr className="border-gray-400 my-4" />

//           {/* Logout */}
//           <li>
//             <button
//               onClick={handleLogout}
//               className="w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-yellow-300 hover:text-black text-white"
//             >
//               <FaSignOutAlt />
//               <span className="text-sm font-medium">Logout</span>
//             </button>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <main className="flex-1 overflow-auto">
//         <div className="bg-white rounded-md p-4 h-full">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;


import { useState, useContext, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  FaBars, FaTimes, FaUser, FaTasks, FaHome, FaUserPlus,
  FaBell, FaBook, FaCheckCircle, FaMapMarkerAlt, FaMoneyBillWave,
  FaChartBar, FaBriefcase, FaEdit, FaPlusCircle, FaSignOutAlt, FaSearch
} from "react-icons/fa";


import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/UseAdmin";
import useTeacher from '../hooks/useTeacher';


const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isTeacher] = useTeacher();
  const [isAdmin] = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 👇 Auto redirect logic
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      if (isAdmin) {
        navigate("/dashboard/manage-users");
      } else if (isTeacher) {
        navigate("/dashboard/teacherProfile");
      } else {
        navigate("/dashboard/studentProfile");
      }
    }
  }, [isAdmin, isTeacher, navigate, location.pathname]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out.",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong while logging out.",
          confirmButtonText: "Try Again",
        });
      });
  };

  const renderNavLink = (to, icon, label) => (
    <li>
      <NavLink
        to={to}
        onClick={closeSidebar}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-yellow-300 hover:text-black ${
            isActive ? "bg-yellow-300 text-black" : "text-white"
          }`
        }
      >
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </NavLink>
    </li>
  );

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-4 py-3 border-b-4 border-orange-500">
        {/* Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="text-gray-600 text-2xl"
          aria-label="Toggle Sidebar"
        >
          <FaBars />
        </button>

        {/* Title */}
        <h2 className="text-lg font-medium text-gray-800">This is the DashBoard</h2>

        {/* Icons (Notification and Search) */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <FaBell className="text-gray-600 text-xl" />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              1
            </span>
          </div>
          <FaSearch className="text-gray-600 text-xl" />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-primary text-white h-full w-64 transition-all duration-300 ease-in-out z-40 p-5 shadow-lg ${
          sidebarOpen ? "left-0" : "-left-64"
        } md:left-0 overflow-y-auto mt-16 md:mt-0`} // Added mt-16 for mobile to push sidebar below navbar
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-wide">Dashboard</h2>
          <button
            onClick={closeSidebar}
            className="md:hidden text-xl"
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2">
          {user && !isAdmin && !isTeacher && (
            <>
              {renderNavLink("/", <FaHome />, "Home")}
              {renderNavLink("/dashboard/studentProfile", <FaUser />, "Profile")}
              {renderNavLink("/dashboard/my-bookings", <FaBook />, "My Bookings")}
              {renderNavLink("/dashboard/joinTeacher", <FaUserPlus />, "Join as a Teacher")}
              {renderNavLink("/dashboard/post-job", <FaPlusCircle />, "Post Job")}
            </>
          )}

          {user && isTeacher && (
            <>
              {renderNavLink("/", <FaHome />, "Home")}
              {renderNavLink("/dashboard/teacherProfile", <FaUser />, "Manage Profile")}
              {renderNavLink("/dashboard/tutor-jobs", <FaBriefcase />, "Available Jobs")}
              {renderNavLink("/dashboard/manage-services", <FaEdit />, "Manage Services")}
            </>
          )}

          {user && isAdmin && (
            <>
              {renderNavLink("/", <FaHome />, "Home")}
              {renderNavLink("/dashboard/manage-users", <FaTasks />, "Manage Users")}
              {renderNavLink("/dashboard/tutors", <FaUser />, "All Tutors")}
              {renderNavLink("/dashboard/message", <FaHome />, "Show Messages")}
              {renderNavLink("/dashboard/add-tutor", <FaUserPlus />, "Add Tutor")}
              {renderNavLink("/dashboard/teacher-applications", <FaCheckCircle />, "Teacher Applications")}
              {renderNavLink("/dashboard/manage-payments", <FaMoneyBillWave />, "Manage Payments")}
              {renderNavLink("/dashboard/admin-analytics", <FaChartBar />, "Analytics")}
              {renderNavLink("/dashboard/students", <FaBell />, "Students")}
              {renderNavLink("/dashboard/all-jobs", <FaPlusCircle />, "Show All Jobs")}
              {renderNavLink("/dashboard/service", <FaPlusCircle />, "Show All Services")}
            </>
          )}

          <hr className="border-gray-400 my-4" />

          {/* Logout */}
          <li>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors duration-200 hover:bg-yellow-300 hover:text-black text-white"
            >
              <FaSignOutAlt />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-auto mt-16 md:mt-0"> {/* Added mt-16 for mobile to push content below navbar */}
        <div className="bg-white rounded-md p-4 h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import Dashboard from "views/Dashboard/Dashboard";
import stuDashboard from "views/Dashboard/StuDashboard";
import InstruDashboard from "views/Dashboard/InstruDashboard";
import QnA from "views/QnA/QuestionAnswer";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";


const dashboardRoutes = [
  {
    path: "/wordmap",
    name: "Word Map",
    icon: "pe-7s-map",
    component: QnA
  },
  {
    path: "/dashboard",
    name: "Admin Dashboard",
    icon: "pe-7s-display1",
    component: Dashboard
  },
  {
    path: "/instrudashboard",
    name: "Instructor Dashboard",
    icon: "pe-7s-graph",
    component: InstruDashboard
  },    
  {
    path: "/studashboard",
    name: "Student Dashboard",
    icon: "pe-7s-glasses",
    component: stuDashboard
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile
  // },
  {
    path: "/table",
    name: "Leader Board",
    icon: "pe-7s-users",
    component: TableList
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography
  // },
  //{ path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications
  // },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;

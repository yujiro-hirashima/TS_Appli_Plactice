import { Home } from "../component/pages/Home";
import { UserManagement } from "../component/pages/UserManagement";
import { Setting } from "../component/pages/Setting";
import { Page404 } from "../component/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];

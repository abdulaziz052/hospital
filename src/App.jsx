import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainPage from "./MainPage";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Register from "./pages/Register";
import RootLayout from "./RootLayout";
import Department from "./pages/Department";

export default function App() {
  const { user } = useSelector((state) => state.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/department",
          element: <Department />,
        },
      ],
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

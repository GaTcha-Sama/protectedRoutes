import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export const Router = () => {
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Home />,
            errorElement: (
                <>
                    Page not found <Link to="/">Home</Link>
                </>
            ),
        },
        {
            path:"/profile",
            element: <Profile/>,
        }
    ]);
  return <RouterProvider router={router} />
};

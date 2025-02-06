import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "./AuthContext";
import { About } from "./pages/About";

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
        },
        {
            path:"/about",
            element: <About/>,
        }
    ]);
  return (
    <AuthProvider isSignedIn={false}>
        <RouterProvider router={router} />
    </AuthProvider>
  )
};

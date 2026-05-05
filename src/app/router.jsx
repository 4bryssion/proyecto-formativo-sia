import { createBrowserRouter, Navigate } from "react-router-dom";

import { 
    // CallToActionLayout, 
    AuthLayout, 
    DashboardLayout

} from "@/shared"

import { AuthRegisterForm } from "@/features/auth";

import { CreateUserPage } from "@/features/users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="auth" replace />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true
            }
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <CreateUserPage />
            },
            {
                path: "/dashboard/auth",
                element: <AuthRegisterForm />
            },
            {
                path: "Contacto",
                element: <h1>Contacto</h1>
            },
            {
                path: "productos",
                element: <h1>Productos</h1>
            },
        ],
    },
]);

export default router;
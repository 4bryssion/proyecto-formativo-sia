import { createBrowserRouter, Navigate } from "react-router-dom";

import { 
    // CallToActionLayout, 
    AuthLayout, 
    DashboardLayout

} from "@/shared"

import { AuthRegisterForm } from "@/features/auth";

import { HomePage } from "@/features/home"

import { CreateUserPage, ListUserPage } from "@/features/users";

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
                element: <HomePage />
            },
            {
                path: "/dashboard/userCreate",
                element: <CreateUserPage />
            },
            {
                path: "/dashboard/auth",
                element: <AuthRegisterForm />
            },
            {
                path: "/dashboard/userList",
                element: <ListUserPage />
            },
        ],
    },
]);

export default router;
import { createBrowserRouter, Navigate } from "react-router-dom";

import {  
    AuthLayout, 
    DashboardLayout,
    ProtectedRoute

} from "@/shared"

import { AuthRegisterForm } from "@/features/auth";

import { AccessPage } from "@/features/access";

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
        element: 
            <ProtectedRoute> 
                <DashboardLayout /> 
            </ProtectedRoute>,
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
            {
                path: "/dashboard/access",
                element: <AccessPage />
            },
        ],
    },
]);

export default router;
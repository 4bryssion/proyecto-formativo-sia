import { Link, Outlet } from "react-router-dom";
import { Undo2 } from "lucide-react";

import {  
    IconButton 
} from "@/shared";

import heroBg from "@/assets/images/bg-4.jpg"

export default function DashboardLayout(){
    return(
        <div
            className="
                relative min-h-screen text-text-primary 
            "
        >
            {/* Fondo con imagen */}
            <div
                className="
                    absolute inset-0 -z-10 bg-cover bg-center
                "
                style={{ backgroundImage: `url(${heroBg})` }}
            />

            <Link to="/auth">
                <IconButton 
                    variant="ghost"
                >
                    <Undo2 />
                </IconButton>
            </Link>

            <Outlet/>
        </div>
    );
}
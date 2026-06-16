import { useState } from "react";
import { Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/services/logoutService";
import { 
    IconButton,
    Input, 
    Button, 
    Select, 
    Checkbox,
    Switch, 
    Dropdown, 
    DropdownTrigger, 
    DropdownItem, 
    DropdownContent,
    SearchField

} from "@/shared";

import logo from "@/assets/logo-1.png";

export default function Navbar(){

    // Componente de búsqueda
    const [ search, setSearch ] = useState("");

    const handleSearch = (value) => {
        console.log("Buscar: ", value)
    };

    const handleClear = () => {
        console.log("Campo limpiado");
    };

    // Estado que controla el switch
    const [ isActive, setIsActive ] = useState(true);

    // Manejador del estado del switch 
    const handleStatusChange = (value) => {
        setIsActive(value);

        // Aquí generalmente va el llamado a una API
        console.log("Nuevo estado ", value)
    }

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/auth");
    }

    return(
        <nav
            className={`
                w-full
                bg-white
                border-b-2

            `}
        >
            <div
                className={`
                    mx-auto max-w-7xl px-4  
                `}
            >
                <div
                    className={`
                        flex h-16 items-center justify-between 
                    `}
                >
                    {/* Logo de marca */}
                    <div
                        className={`
                            hidden sm:inline-flex items-center    
                        `}
                    >
                        <Link 
                            to={"/dashboard"}
                            className={`
                                text-h1
                                font-heading    
                            `}    
                        >
                            <img src={logo} alt="logo" className="h-12"/>
                        </Link>
                    </div>

                    {/* Switch */}
                    <Switch 
                        checked={isActive}
                        onChange={handleStatusChange}
                        size="md"
                        className="hidden sm:inline-flex"
                    />

                    {/* Link de navegación */}
                    <ul
                        className={`
                            md:flex items-center gap-6    
                        `}
                    >
                        <li>
                            <Link
                                to={"/inicio"}
                                className={`hover:text-text-primary transition`}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/cursos"}
                                className={`hover:text-text-primary transition`}
                            >
                                Cursos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/recursos"}
                                className={`hover:text-text-primary transition`}
                            >
                                Recursos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contacto"}
                                className={`hover:text-text-primary transition`}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>

                    <SearchField
                        value={search}
                        onChange={setSearch}
                        onSubmit={handleSearch}
                        onClear={handleClear}
                        placeholder="Buscar productos..."
                        size="md"
                        variant="filled"
                        className="w-80"
                    />

                    {/* Sección derecha: búsqueda + usuario */}
                    <div
                        className={`
                            flex items-center gap-5    
                        `}
                    >
                        <div
                            className={`relative hidden sm:block `}
                        >
                            {/* Icono de busqueda search */}
                            {/* <Search
                                className={`
                                    absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500    
                                `}
                            /> */}
                                
                            {/* Input */}
                            {/* <input 
                                placeholder="Buscar"
                                className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-text-primary"
                            /> */}

                            

                        </div>

                        

                        {/* Icono de usuario
                        <Link>
                            <IconButton
                                ariaLabel = "Menu"
                            >
                                <User />
                            </IconButton>
                        </Link> */}

                        {/* Dropdown */}
                        <div
                            className="p-10 z-10"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <IconButton ariaLabel="Menú de usuario">
                                        <User />
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">

                                    <DropdownItem>
                                        <Link to="/dashboard" className="block w-full">
                                            Perfil
                                        </Link>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <Link to="/dashboard/userCreate" className="block w-full">
                                            Crear usuario
                                        </Link>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <Link to="/dashboard/userList" className="block w-full">
                                            Gestión de usuarios
                                        </Link>
                                    </DropdownItem>

                                    <DropdownItem onClick={handleLogout}>
                                        Cerrar Sesión
                                    </DropdownItem>
                                    
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
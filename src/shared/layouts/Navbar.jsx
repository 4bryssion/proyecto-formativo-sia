import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
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
    DropdownContent 

} from "@/shared";

import logo from "@/assets/logo-1.png";
import { useState } from "react";

export default function Navbar(){

    // Estado que controla el switch
    const [ isActive, setIsActive ] = useState(true);

    // Manejador del estado del switch 
    const handleStatusChange = (value) => {
        setIsActive(value);

        // Aquí generalmente va el llamado a una API
        console.log("Nuevo estado ", value)
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
                            flex
                            items-center    
                        `}
                    >
                        <Link 
                            to={"/"}
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
                            <Search
                                className={`
                                    absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500    
                                `}
                            />
                                
                            {/* Input */}
                            <input 
                                placeholder="Buscar"
                                className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-text-primary"
                            />
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
                            className="p-10"
                        >
                            <Dropdown>
                                <DropdownTrigger>
                                    <IconButton ariaLabel="Menú de usuario">
                                        <User />
                                    </IconButton>
                                </DropdownTrigger>

                                <DropdownContent className="right-0 w-48">

                                    <DropdownItem>
                                        <Link to="/" className="block w-full">
                                            Perfil
                                        </Link>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <Link to="/dashboard/auth" className="block w-full">
                                            Configuracion
                                        </Link>
                                    </DropdownItem>

                                    <DropdownItem>
                                        <Link to="/dashboard/auth" className="block w-full">
                                            Cerrar Sesión
                                        </Link>
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
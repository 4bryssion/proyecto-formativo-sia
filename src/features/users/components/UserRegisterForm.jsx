import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter, Menu } from "lucide-react";

import { getDocumentTypes } from "@/features/users/services/selectService.js";

import { userSchema } from "../schemas/userSchema.js";

import { 
    Input, 
    Button, 
    Select, 
    Checkbox, 
    IconButton, 
    FileInput,
    Dropdown, 
    DropdownTrigger, 
    DropdownItem, 
    DropdownContent 

} from "@/shared";
import { tr } from "zod/locales";


export default function UserRegisterForm(){

    // Constantes:
    
    const navigate = useNavigate();

    // Estados:

    const [documentTypes, setDocumentTypes] = useState([]);

    const [formData, setFormData] = useState({
        userName: "", 
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],

        // Flags booleanos 
        isStaff: false,
        isActive: true,
        isSuperUser: false,

    });

    const [errors, setErrors] = useState({})

    // Efectos:

    useEffect (() => {
        getDocumentTypes().then(setDocumentTypes);
    }, []);

    // ===========================================
    //                 Handles
    // ===========================================
    // Función que se ejecuta cada vez que cambia el valor de un input del formulario

    // Handle genérico:

    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anteriores del estado
            ...prev,

            // Se actualiza únicamente lo que cambió
            [name]: type === "chechbox" ? checked : value,
        }));
    }

    // Handles personalizados:
    
    // Función que se ejecuta cuando se envía el formulario 
    const handleSubmit = (e) => {
        e.preventDefault();

        // Se valida el objeto de formData usando el esquema definido con Zod
        // safeParse devuelve un objeto indicando si la validacion fue exitosa o no
        const result = userSchema.safeParse(formData);

        // Si la validación falla
        if (!result.success){
            // Objeto donde se almacenarán los errores por campo
            const fieldErrors = {};

            // Zod devuelve los errores en un arreglo llamado issues
            // Se recorren para asociar cada error a su campo correspondiente
            result.error.issues.forEach((issue) => {
                // Issue.path contiene la ruta del campo que falló
                const field = issue.path[0];

                // Se guarda el mensaje de error en el objeto fieldErrors
                fieldErrors[field] = issue.message;
            });

            // Se actualiza el estado de errores para mostrarlos en el formulario
            setErrors(fieldErrors);

            // Se detiene la ejecución porque el formulario tiene errores
            return;
        }

        // Si la validación es exitosa se limpian los errores anteriores 
        setErrors({});

        // result.data contiene los datos ya validados por Zod
        console.log("Usuario valido:", result.data)

    };

    return(
        <div
            className="
                
            "
        >
            <h1
                className="
                    text-text-primary
                    text-2xl mb-6
                    text-center
                    pt-6
                "
            >
                Registro de Usuarios
            </h1>

            <form 
                className="
                    grid
                    grid-cols-1
                    items-center
                    gap-6
                "

                onSubmit={handleSubmit}
            >
                {/* Inputs */}
                <div
                    className="
                        grid 
                        grid-cols-2
                        gap-6
                        my-0 mx-auto
                        border
                        p-12
                        rounded-md
                    "
                >
                    <Input 
                        label = "Nombre"
                        name = "userName"
                        placeholder = "Ingrese su nombre"
                        value={formData.userName}
                        onChange = {handleChange}
                        error={errors.userName}
                    />

                    <Input 
                        label = "Correo"
                        name = "userEmail"
                        placeholder = "Ingrese su correo"
                        type="email"
                        value={formData.userEmail}
                        onChange = {handleChange}
                        error={errors.userEmail}
                    />

                    <Input 
                        label = "Teléfono"
                        name = "userPhone"
                        placeholder = "Ingrese su teléfono"
                        type="tel"
                        value={formData.userPhone}
                        onChange = {handleChange}
                        error={errors.userPhone}
                    />

                    <Select 
                        label = "Tipo de documento"
                        name="userDocumentType"
                        options={documentTypes}
                        value={formData.userDocumentType}
                        onChange = {handleChange}
                        error={errors.userDocumentType}
                    />

                    <Input 
                        label = "Número de documento"
                        name = "userDocumentNumber"
                        placeholder = "Ingrese su número de documentos"
                        value={formData.userDocumentNumber}
                        onChange = {handleChange}
                        error={errors.userDocumentNumber}
                    />

                    <Input 
                        label = "Contraseña"
                        name  = "userPassword"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                        value={formData.userPassword}
                        onChange = {handleChange}
                        error={errors.userPassword}
                    />

                    <Checkbox
                        id="isStaff"
                        name="isStaff"
                        label="Es staff"
                        checked={formData.isStaff}
                        onChange={handleChange}
                    />

                    <Checkbox
                        id="isActive"
                        name="isActive "
                        label="Activo"
                        checked={formData.isActive}
                        onChange={handleChange}
                    />
                    
                    <Checkbox
                        id="isSuperUser"
                        name="isSuperUser"
                        label="Es un super usuario"
                        checked={formData.isSuperUser}
                        onChange={handleChange}
                    />

                    {/* Contenedor del file input */}
                    <div>
                        <h4
                            className="m-3 ml-0"
                        >
                            Máximo de 12 archivos (.jpg .jpeg .pdf) de 10MB
                        </h4>

                        <FileInput 
                            value={formData.userImage}
                            onChange={(files) =>
                                setFormData((prev) => ({ ...prev, userImage: files}))
                            }
                            multiple={false}
                        />
                        {errors.userImage && (
                            <span
                                className="text-red-500 text-sm"
                            >
                                {errors.userImage}
                            </span>
                        )}
                    </div>

                </div>


                {/* Actions */}
                <div 
                    className=" flex items-center justify-center gap-6"
                >
                    <Button
                        variant = "secondary"
                        size = "sm"
                        onClick={() => navigate(-1)}
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant = "primary"
                        size = "sm"
                    >
                        Guardar
                    </Button>

                    {/* Icon button
                    <Link
                        to="/dashboard"
                    >
                        <IconButton
                            variant="ghost"
                        >
                            <SquareArrowRightEnter />
                        </IconButton>
                    </Link> */}

                    {/* Dropdown */}
                    <div
                        className="p-10"
                    >
                        <Dropdown>
                            <DropdownTrigger>
                                <IconButton ariaLabel="Menú de usuario">
                                    <Menu />
                                </IconButton>
                            </DropdownTrigger>

                            <DropdownContent className="right-0 w-48">

                                <DropdownItem>
                                    <Link to="/auth" className="block w-full">
                                        Perfil
                                    </Link>
                                </DropdownItem>

                                <DropdownItem>
                                    <Link to="/dashboard" className="block w-full">
                                        Configuracion
                                    </Link>
                                </DropdownItem>
                                
                            </DropdownContent>
                        </Dropdown>
                    </div>

                    {/* <IconButton
                        onClick={() => navigate("/dashboard")}
                    >
                        <SquareArrowRightEnter />
                    </IconButton> */}

                </div>
            </form>

        </div>
    )
}
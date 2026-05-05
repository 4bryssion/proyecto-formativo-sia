import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { 
    Input, 
    Button, 
} from "@/shared";

import { authSchema } from "../schemas/authSchema.js";

export default function AuthRegisterForm(){

    // Constantes:
    
    const navigate = useNavigate();

    // Estados:

    const [formData, setFormData] = useState({
        authEmail: "",
        authPassword: "",
    });

    const [errors, setErrors] = useState({})

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
        const result = authSchema.safeParse(formData);

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
                flex flex-col h-screen justify-center
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
                Inicio de Sesión
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
                        grid-cols-1
                        gap-6
                        my-0 mx-auto
                        border
                        p-12
                        rounded-md
                    "
                >
                    <Input 
                        label = "Correo"
                        name = "authEmail"
                        placeholder = "Ingrese su correo"
                        type="email"
                        value={formData.authEmail}
                        onChange = {handleChange}
                        error={errors.authEmail}
                    />

                    <Input 
                        label = "Contraseña"
                        name  = "authPassword"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                        value={formData.authPassword}
                        onChange = {handleChange}
                        error={errors.authPassword}
                    />
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
                        onClick={() => navigate("/dashboard")}
                    >
                        Iniciar Sesión
                    </Button>

                </div>
            </form>
        </div>
    )
}
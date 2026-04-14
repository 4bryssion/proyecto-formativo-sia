import { useState, useEffect } from "react";

import { getDocumentTypes } from "@/features/users/services/selectService.js";

import { Input, Button, DeleteCounter, DeleteEffect, DeleteCounter2, Select } from "@/shared";


export default function UserRegisterForm(){

    const [documentTypes, setDocumentTypes] = useState([]);

    useEffect (() => {
        getDocumentTypes().then(setDocumentTypes);
    }, []);

    // Handle
    // const handleNameChange = (e)  => {
    //     console.log("Nombre: ", e.target.value)
    // }

    // const handleEmailBlur = (e)  => {
    //     console.log("Email: ", e.target.value)
    // }

    return(
        <div>
            <h1
                className="
                    text-text-primary
                    text-2xl mb-6
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
            >
                {/* Inputs */}
                <div
                    className="
                        grid 
                        grid-cols-2
                        gap-6
                        my-0 mx-auto
                    "
                >
                    <Input 
                        label = "Nombre"
                        name = "userName"
                        placeholder = "Ingrese su nombre"
                        // onChange = {handleNameChange}
                    />

                    <Input 
                        label = "Correo"
                        name = "userEmail"
                        placeholder = "Ingrese su correo"
                        type="email"
                        // onBlur = {handleEmailBlur}
                    />

                    <Input 
                        label = "Teléfono"
                        name = "userPhone"
                        placeholder = "Ingrese su teléfono"
                        type="tel"
                    />

                    <Select 
                        label = "Tipo de documento"
                        name="userDocumentType"
                        options={documentTypes}
                    />

                    <Input 
                        label = "Número de documento"
                        name = "userDocumentNumber"
                        placeholder = "Ingrese su número de documentos"
                    />

                    <Input 
                        label = "Contraseña"
                        name  = "userPassword"
                        placeholder = "Ingrese su contraseña"
                        type="password"
                    />

                </div>


                {/* Actions */}
                <div 
                    className=" flex items-center justify-center gap-6"
                >
                    <Button
                        variant = "primary"
                        size = "sm"
                    >
                        Guardar
                    </Button>

                    <Button
                        variant = "secondary"
                        size = "sm"
                    >
                        Cancelar
                    </Button>
                </div>
            </form>

            {/* Uso del useState */}
            {/* <DeleteCounter /> */}

            {/* Uso del useEffect */}
            {/* <DeleteEffect /> */}

            {/* Uso del useEffect con dependencias de useState */}
            {/* <DeleteCounter2 /> */}


        </div>
    )
}
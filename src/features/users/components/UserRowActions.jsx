import { Pencil, EllipsisVertical } from "lucide-react";
// Hook de React Router para navegar programáticamente entre rutas
import { useNavigate } from "react-router-dom";

import {
    Dropdown,
    DropdownTrigger,
    DropdownItem,
    DropdownContent
} from "@/shared";


// Componente que renderiza las acciones de cada fila de usuario
// Recibe como prop el objeto user
export default function UserRowActions({ user }) {

  // Hook que permite redirigir a otra ruta desde código
  const navigate = useNavigate();


  // Acción para editar el usuario
  // Redirige a la página de edición usando el id del usuario
  const handleEdit = () => {
    navigate(`/users/${user.id}/edit`);
  };


  // Acción para eliminar el usuario
  // Actualmente solo imprime en consola el id
  // En una aplicación real aquí se llamaría a la API
//   const handleDelete = () => {
//     console.log("Eliminar usuario", user.id);
//   };

  return (
    // Contenedor de los botones de acciones
    <div className="flex gap-2">

      {/* Botón editar */}
      <button
        onClick={handleEdit} // Ejecuta la navegación a la página de edición
        className="p-1 rounded hover:bg-gray-900"
      >
        <Pencil size={16} /> {/* Icono de editar */}
      </button>

      {/* Botón option */}
      <Dropdown>
        <DropdownTrigger>
          <button className="p-1 rounded hover:bg-gray-900">
            <EllipsisVertical size={16} /> {/* Icono de opciones */}
          </button>
        </DropdownTrigger>

        <DropdownContent className="right-0">
          <DropdownItem>Opción 1</DropdownItem>
          <DropdownItem>Opción 2</DropdownItem>
          <DropdownItem>Opción 3</DropdownItem>
        </DropdownContent>
      </Dropdown>

    </div>
  );
}


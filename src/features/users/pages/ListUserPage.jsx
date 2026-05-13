import { DataTable, Button } from "@/shared"
import { userColumns } from "../table/userColumns"
import { users } from "../data/users"
import { Link } from "react-router-dom";

export default function ListUserPage() {


  return (
    <div className="p-6">

        <div className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold mb-4">Usuarios</h1>

            <div className="flex gap-12">
                <Link to="/dashboard">
                    <Button
                        variant="secondary" 
                    >
                        Reporte
                    </Button>
                </Link>


                <Link to="/dashboard/userCreate">
                    <Button
                        variant="primary"
                    >
                        Crear Usuario
                    </Button>
                </Link>


            </div>
        </div>


      <DataTable
        data={users}
        columns={userColumns}
      />


    </div>
  )
}


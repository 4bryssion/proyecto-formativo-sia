import { DataTable, Button } from "@/shared"
import { userColumns } from "../table/userColumns"
import { users } from "../data/users"
import { Link } from "react-router-dom";
import { useState } from "react";

import ReportConfigModal from "../reports/components/ReportConfigModal.jsx"

export default function ListUserPage() {

    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <div className="p-6">

        <div className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold mb-4">Usuarios</h1>

            <div className="flex gap-12">
                
                <Button
                    variant="secondary" 
                    onClick={() => setIsReportModalOpen(true)}
                >
                    Generar Reporte
                </Button>


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

      <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />


    </div>
  )
}


"use client";

import { ClienteForm } from "@/app/componentes/clienteForm/ClienteForm";
import { FormContainer } from "@/app/componentes/formContainer/FormContainer";

/* import { useRouter } from "next/router"; */
interface Client {
  firstName: string;
  lastName: string;
}
export default function Creacion() {
  /* const router = useRouter(); */

  return (
    <>
      <main>
        <div className="d-flex flex-row">Pagina de creacion de clientes</div>

        <FormContainer>
          <ClienteForm />
        </FormContainer>
        <button>MostrarCLientes</button>
      </main>
    </>
  );
}

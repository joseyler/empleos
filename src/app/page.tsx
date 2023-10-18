import { BarraLateral } from "./componentes/barralateral/BarraLateral"
import { Encabezado } from "./componentes/encabezado/Encabezado"

export default function Home() {

  const options = ["Mis Empleos", "Mi Cuenta", "Configuracion"]

  return (
    <>
      <Encabezado />
      <main>
        <div className="d-flex flex-row">
          <BarraLateral menu={options} />
          <div>
            Hola Mundo!!
          </div>
        </div>
      </main>
    </>
  )
}

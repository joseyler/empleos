"use client";
import { useEffect, useState } from "react";
import { BarraLateral } from "./componentes/barralateral/BarraLateral";
import { Card } from "./componentes/card/Card";
import { CardContainer } from "./componentes/cardContainer/CardContainer";
import { Encabezado } from "./componentes/encabezado/Encabezado";

export default function Home() {
  const options = ["Mis Empleos", "Mi Cuenta", "Configuracion"];
  const [jobs, setJobs] = useState<string[]>([]);
  const [jobsTomados, setJobsTomados] = useState<string[]>([]);
  const [remanentes, setRemanentes] = useState(0);
  const [cantTomados, setCantTomados] = useState(0);
  const [misEmpleos, setMisEmpleos] = useState(true);
  const postulacion = (titulo: string) => {
    const newJobs = jobs.filter((job) => job != titulo);
    setJobs(newJobs);

    //  ...algo es el contenido de, sirve para objetos o arreglos
    // en este caso estoy creando un arreglo nuevo con el contenido de jobsTomados y titulo
    const tomados: string[] = [...jobsTomados, titulo];
    //hacer esto es equivalente a
    // const tomados = [];
    // jobsTomados.forEach((jt) => {
    //   tomados.push(jt);
    // });
    // tomados.push(titulo);
    setJobsTomados(tomados);
  };

  const despostular = (titulo: string) => {
    const newPostulados = jobsTomados.filter((job) => job != titulo);
    setJobsTomados(newPostulados);

    const libres: string[] = [...jobs, titulo];
    setJobs(libres);
  };

  const resetPostulaciones = () => {
    setJobs(["Desarrollador", "Project Manager", "QA", "Analista Software"]);
    setJobsTomados([]);
  };

  // cuando se pone el arreglo vacio como disparador, se llama al callback despues del primer render
  useEffect(() => {
    const misJobs = [
      "Desarrollador",
      "Project Manager",
      "QA",
      "Analista Software",
    ];
    setJobs(misJobs);
  }, []);

  //cuando se pone el arreglo con uno o mas estados (jobs) disparador,
  // se llama al callback despues que se ejecuta el set de estado
  useEffect(() => {
    setRemanentes(jobs.length);
  }, [jobs]);

  useEffect(() => {
    setCantTomados(jobsTomados.length);
  }, [jobsTomados]);

  return (
    <>
      <Encabezado />
      <main>
        {misEmpleos && (
          <div className="d-flex flex-row">
            <BarraLateral menu={options} />
            <div>
              <CardContainer>
                <h3>Postulaciones Disponibles</h3>
                <div className="d-flex flex-row justify-content-evenly">
                  {jobs.map((job: string) => (
                    <Card
                      titulo={job}
                      key={`jobItem${job}`}
                      postulacionClicked={(titulo: string) =>
                        postulacion(titulo)
                      }
                      postulado={false}
                    />
                  ))}
                </div>
              </CardContainer>
              <CardContainer>
                Quedan disponibles {remanentes} postulaciones
                <br />
                Cantidad postulaciones {cantTomados} realizadas
                <br />
                <button
                  className="btn btn-secondary"
                  onClick={() => resetPostulaciones()}
                >
                  Cancelar
                </button>
              </CardContainer>
              <CardContainer>
                <h3>Postulaciones Tomadas</h3>
                <div className="d-flex flex-row justify-content-evenly">
                  {jobsTomados.map((job: string) => (
                    <Card
                      titulo={job}
                      key={`jobItem${job}`}
                      postulacionClicked={(titulo: string) =>
                        despostular(titulo)
                      }
                      postulado={true}
                    />
                  ))}
                </div>
              </CardContainer>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

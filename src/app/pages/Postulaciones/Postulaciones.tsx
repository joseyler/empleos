"use client";
import { useEffect, useState, useContext } from "react";
import { BarraLateral } from "../../componentes/barralateral/BarraLateral";
import { Card } from "../../componentes/card/Card";
import { CardContainer } from "../../componentes/cardContainer/CardContainer";
import { Encabezado } from "../../componentes/encabezado/Encabezado";
import { getMunicipiosFromAPI, getProvinciasFromAPI } from '../../services/geo';
import Provincia from "../../model/Provincia";
import Municipio from "../../model/Municipio";
import { SesionContext } from "../../context/SesionContext";
import { PostulacionesEctx } from "../PostulacionesECtx/PostulacionesEctx";

export const Postulaciones = () => {
  const { permisos } = useContext(SesionContext);
  const [jobs, setJobs] = useState<string[]>([]);
  const [jobsTomados, setJobsTomados] = useState<string[]>([]);
  const [remanentes, setRemanentes] = useState(0);
  const [cantTomados, setCantTomados] = useState(0);

  const [provincias, setProvincias] = useState<Provincia[]>([]);

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

  const resetPostulaciones = () => {
    setJobs(["Desarrollador", "Project Manager", "QA", "Analista Software"]);
    setJobsTomados([]);
  };

  const cargarProvincias = async () => {
    try {
      const rtaProvincias = await getProvinciasFromAPI();
      const listaProv:Provincia[] = rtaProvincias.provincias.map((pr:any) => {
        return {
          id: pr.id,
          nombre : pr.nombre,
          seleccionada: false,
          municipios: [],
        }
      });
      setProvincias(listaProv);
    } catch (error:any) {
      alert(error.message)
    }
  }

  const cargarMunicipios = async (idProvincia:number) => {
    try {
      const rtaMunicipios = await getMunicipiosFromAPI(idProvincia);
      const listaMunicipios:Municipio[] = rtaMunicipios.municipios.map((mn:any) => {
        return {
          id: mn.id,
          nombre : mn.nombre,
        }
      });
      const newProvincias:Provincia[] = provincias.map((pr) => ({
        ...pr,
        seleccionada: pr.id == idProvincia,
        municipios: pr.id == idProvincia ? listaMunicipios : [],
      }))
      setProvincias(newProvincias);
    } catch (error:any) {
      alert(error.message)
    }
  }

  // cuando se pone el arreglo vacio como disparador, se llama al callback despues del primer render
  useEffect(() => {
    const misJobs = [
      "Desarrollador",
      "Project Manager",
      "QA",
      "Analista Software",
    ];
    setJobs(misJobs);
    cargarProvincias();
  }, []);

  //cuando se pone el arreglo con uno o mas estados (jobs) disparador,
  // se llama al callback despues que se ejecuta el set de estado
  useEffect(() => {
    setRemanentes(jobs.length);
  }, [jobs]);

  useEffect(() => {
    setCantTomados(jobsTomados.length);
  }, [jobsTomados]);



  const handleProvinciaSeleccionada = (provincia: Provincia) => {
    if (provincia.seleccionada) {
      const newProvincias:Provincia[] = provincias.map((pr) => ({
        ...pr,
        seleccionada: false,
        municipios: [],
      }));
      setProvincias(newProvincias);
    } else {
      cargarMunicipios(provincia.id);
    }
  }

  return (
    <>
      <Encabezado />
      {permisos?.length > 0 && permisos[0] == 'POST' && (
        <main>
        <div className="d-flex flex-row">
          <BarraLateral menu={provincias} handleClick={(provincia:Provincia) => handleProvinciaSeleccionada(provincia)} />
          <div>
            <CardContainer>
              <h3>Postulaciones Disponibles</h3>
              <div className="d-flex flex-row justify-content-evenly">
                {jobs.map((job: string) => (
                  <Card
                    titulo={job}
                    key={`jobItem${job}`}
                    postulacionClicked={(titulo: string) => postulacion(titulo)}
                    /* postulado={false} */
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
                    postulacionClicked={(titulo: string) => postulacion(titulo)}
                    /* postulado={true} */
                  />
                ))}
              </div>
            </CardContainer>
          </div>
        </div>
      </main>
      )}
      {permisos?.length > 0 && permisos[0] == 'CTX' && (
        <PostulacionesEctx />
      )}
    </>
  );
}

import React, { useContext } from 'react';
import { PostulacionesContext } from './PostulacionesContext';
import Postulacion from '@/app/model/Postulacion';
import { Card } from '@/app/componentes/card/Card';


export const PostulacionesDisponibles = () => {
  
  const { postulaciones, postulacion } : { postulaciones: Postulacion[], postulacion: Function} = useContext(PostulacionesContext);

  return (
    <>
    <h3>Postulaciones Disponibles</h3>
              <div className="d-flex flex-row justify-content-evenly">
                {postulaciones.map((job: Postulacion) => (
                  <React.Fragment key={`jobItem${job.nombre}`}>
                  <Card
                    titulo={job.nombre}
                    key={`jobItem${job.nombre}`}
                    postulacionClicked={() => postulacion(job)}
                  />
                  <div>
                    Quedan {job.maximoPostulantes - job.cantidadPostulantes} de {job.maximoPostulantes}
                  </div>
                  </React.Fragment>
                ))}
              </div>
    </>
  );
}

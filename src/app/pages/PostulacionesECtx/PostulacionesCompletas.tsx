import React, { useContext } from 'react';
import { PostulacionesContext } from './PostulacionesContext';
import Postulacion from '@/app/model/Postulacion';
import { Card } from '@/app/componentes/card/Card';


export const PostulacionesCompletas = () => {
  
  const { postulacionesCompletas, postulacion } : { postulacionesCompletas: Postulacion[], postulacion: Function} = useContext(PostulacionesContext);

  return (
    <>
    <h3>Postulaciones Completas</h3>
              <div className="d-flex flex-row justify-content-evenly">
                {postulacionesCompletas.map((job: Postulacion) => (
                  <React.Fragment key={`jobItem${job.nombre}`}>
                  <Card
                    titulo={job.nombre}
                    postulacionClicked={() => postulacion(job)}
                  />
                  <div>
                    Se completaro las {job.maximoPostulantes} vacantes.
                  </div>
                  </React.Fragment>
                ))}
              </div>
    </>
  );
}

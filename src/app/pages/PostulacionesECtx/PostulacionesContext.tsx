import Postulacion from "@/app/model/Postulacion";
import React, { createContext, useEffect, useMemo, useState } from "react";

const postInformation = {
  postulaciones: [],
  postulacionesCompletas: [], 
  postulacion: () => {}
};

export const PostulacionesContext = createContext<{  
  postulaciones: Postulacion[], 
  postulacionesCompletas: Postulacion[], 
  postulacion: Function,
}>(postInformation);

export const PostulacionesContextProvider = (props:any) => {
  const { children } : { children: React.ReactNode } = props;

  const [postulaciones, setPostulaciones] = useState<Postulacion[]>([]);
  const [postulacionesCompletas, setPostulacionesCompletas] = useState<Postulacion[]>([]);
  

  useEffect(()=> {
    const misJobs:Postulacion[] = [
      { nombre: "Desarrollador React", cantidadPostulantes: 0, maximoPostulantes: 15},
      { nombre: "Tester Web", cantidadPostulantes: 0, maximoPostulantes: 5},
      { nombre: "Proyect Manager", cantidadPostulantes: 0, maximoPostulantes: 2},
      { nombre: "Data Analyst", cantidadPostulantes: 0, maximoPostulantes: 2},
      { nombre: "Toilet Cleaner", cantidadPostulantes: 0, maximoPostulantes: 3},
    ];
    setPostulaciones(misJobs);
  }, []);

  const postulacion:Function = (post:Postulacion) => {
    post.cantidadPostulantes += 1;
    if (post.cantidadPostulantes == post.maximoPostulantes) {
      const newPostulaciones = postulaciones.filter((pos) => pos.nombre != post.nombre);
      setPostulaciones(newPostulaciones);
      setPostulacionesCompletas([...postulacionesCompletas, post]);
    } else {
      setPostulaciones([...postulaciones]);
    }
  }

  const valueMemo :{
    postulaciones: Postulacion[], postulacionesCompletas: Postulacion[] ,postulacion: Function,
  } = useMemo(() => ({
    postulaciones,
    postulacionesCompletas,
    postulacion,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [postulaciones, postulacionesCompletas]);

  return (
    <PostulacionesContext.Provider value={valueMemo}>
      {children}
    </PostulacionesContext.Provider>
  )

}
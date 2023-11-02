"use client";
import React, { useState } from "react";
import "./Card.css";
export const Card = (props: any) => {
  const { titulo, postulacionClicked, postulado } = props;
  const [btnPostulacion, setBtnPostulacion] = useState<string>(
    postulado ? "despostular" : "postular"
  );
  // const [sePostulo, setSePostulo] = useState<boolean>(false);

  /*   const postular = (titulo: string) => {
    if (!sePostulo) {
      postulacionClicked(titulo);
      setSePostulo(true);
    } else {
      setSePostulo(false);
      console.log("despostular");
    }
  }; */
  // const postularAEmpleo = (event:React.SyntheticEvent) => {
  //   console.log(event);
  //   postulacionClicked(titulo);
  // }

  /*   useEffect(() => {
    if (sePostulo) {
      setBtnPostulacion("despostular");
    } else {
      setBtnPostulacion("POSTULAR");
    }
  }, [sePostulo]); */

  return (
    <div className="cart-job">
      <h2>{titulo}</h2>
      <hr />
      <button
        className="btn btn-info"
        key={titulo}
        // onClick={(event) => postularAEmpleo(event)}
        onClick={() => postulacionClicked(titulo)}
      >
        {btnPostulacion}
      </button>
      {/* {postulado && <CantidadTomados />} */}
    </div>
  );
};

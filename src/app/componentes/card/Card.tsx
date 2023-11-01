"use client";
import "./Card.css";
export const Card = (props: any) => {
  const { titulo, postulacionClicked, postulado } = props;

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
      setBtnPostulacion("POSTULAR");{postulado && <CantidadTomados />}
    }
  }, [sePostulo]); */

  return (
    <div className="cart-job">
      <h2>{titulo}</h2>
      <hr />
      <button
        className={`btn ${postulado ? "btn-danger" : "btn-success"}`}
        key={titulo}
        // onClick={(event) => postularAEmpleo(event)}
        onClick={() => postulacionClicked(titulo)}
      >
        {postulado ? "despostular" : "postular"}
      </button>
      {/* {postulado && <CantidadTomados />} */}
    </div>
  );
};

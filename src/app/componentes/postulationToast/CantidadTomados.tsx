"use client";
import "./CantidadTomados.css";
export const CantidadTomados = (props: any) => {
  const { cantTomados } = props;

  return (
    <>
      <div className="container-toast" />
      <div>
        <h2> se tomaron {cantTomados} trabajos </h2>
      </div>
    </>
  );
};

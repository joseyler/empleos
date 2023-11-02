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
import { PostulacionesContextProvider } from "./PostulacionesContext";
import { PostulacionesDisponibles } from "./PostulacionesDisponibles";
import { PostulacionesCompletas } from "./PostulacionesCompletas";

export const PostulacionesEctx = () => {
  return (
    <>
        <main>
          <PostulacionesContextProvider>
            <div className="d-flex flex-row">
              <div>
                <CardContainer>
                  <PostulacionesDisponibles />
                </CardContainer>
                <CardContainer>
                  <PostulacionesCompletas />
                </CardContainer>
              </div>
            </div>
          </PostulacionesContextProvider>
      </main>
    </>
  );
}

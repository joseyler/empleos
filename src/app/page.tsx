"use client";
import { SesionContextProvider } from "./context/SesionContext";
import { Postulaciones } from "./pages/Postulaciones/Postulaciones";

export default function Home() {

  return (
    <SesionContextProvider>
        <Postulaciones />
    </SesionContextProvider>
  );
}

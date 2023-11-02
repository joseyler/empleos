import React, { createContext, useEffect, useMemo, useState } from "react";

const sessionInformation = {
  usuario: {},
  permisos: [],
}

export const SesionContext = createContext(sessionInformation);

export const SesionContextProvider = (props:any) => {
  const { children } : { children: React.ReactNode } = props;

  const [usuario, setUsuario] = useState({});
  const [permisos, setPermisos] = useState<string[]>([]);

  useEffect(()=> {
    setUsuario({
      nombre: 'Jose',
      apellido: 'Perez',
    });
    setPermisos(['CTX']);
  }, []);

  const valueMemo:any = useMemo(() => ({
    usuario,
    permisos,
  }), [usuario, permisos]);

  return (
    <SesionContext.Provider value={valueMemo}>
      {children}
    </SesionContext.Provider>
  )

}
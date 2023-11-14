"use client";
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  createColumnHelper,
} from '@tanstack/react-table';
import Municipio from '@/app/model/Municipio';
import { getMunicipiosFromAPI } from '@/app/services/geo';
import { Tabla } from '@/app/componentes/Tabla/Tabla';

export default function Reporte() {

  const router = useRouter();
  const params = useParams();
  const [listaMunicipios, seListaMunicipios] = useState<Municipio[]>([]);

  
  const navegarAVentas = () => {
    router.push('/ventas');
  }

  const cargarMunicipios = async (idProvincia:number) => {
    try {
      const rtaMunicipios = await getMunicipiosFromAPI(idProvincia);
      const listaMunicipios:Municipio[] = rtaMunicipios.municipios.map((mn:any) => {
        return {
          id: mn.id,
          nombre : mn.nombre,
          venta: Math.floor(Math.random() * 100000)
        }
      });
      seListaMunicipios(listaMunicipios);
    } catch (error:any) {
      alert(error.message)
    }
  }

  useEffect(() => {
    if (params) {
      cargarMunicipios(Number(params.provincia));
    } else {
      alert('Parametro provincia es requerido');
    }
  }, []);


  const columnHelper = createColumnHelper<Municipio>()
  const columnas = useMemo<any[]>(() => ([
    columnHelper.accessor('id', {
      header: 'Identificador',
    }),
    columnHelper.accessor('nombre', {
      header: 'Nombre',
    }),
    columnHelper.accessor('venta' , {
      header: 'Ventas',
      footer: () => listaMunicipios.reduce((prev, curr) => prev + (curr.venta || 0), 0),
    })
  ]), [listaMunicipios]);



  const muni = {
    id: 1,
    nombre: 'Olavarria',
  }

  return (
    <>
      <main>
        <div className="d-flex flex-row mt-3">
          <h1>{muni['nombre']}</h1>
          <br/>
        <button 

          onClick={() => navegarAVentas()}>
          Volver a Ventas
            </button>
        </div>
        <div className="p-2">
        {listaMunicipios.length > 0 && (
          <Tabla datos={listaMunicipios} columnas={columnas} />
        )}
      
    </div>
      </main>
    </>
  );
}
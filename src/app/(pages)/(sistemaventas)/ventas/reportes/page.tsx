"use client";
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Municipio from '@/app/model/Municipio';
import { getMunicipiosFromAPI } from '@/app/services/geo';
import { toast } from 'react-toastify';
import { Tabla } from '@/app/componentes/Tabla/Tabla';
import {
  createColumnHelper,
} from '@tanstack/react-table';

export default function Reporte() {

  const router = useRouter();
  const queryParams = useSearchParams();
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
      toast.success("Municipios cargados correctamente");
    } catch (error:any) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    const idProvincia = queryParams?.get('provincia');
    if (idProvincia) {
      cargarMunicipios(Number(idProvincia));
    } else {
      toast.error('Parametro provincia es requerido');
    }
  }, []);

  const columnHelper = createColumnHelper<Municipio>()
  const columnas = useMemo<any[]>(() => ([

    columnHelper.accessor('nombre', {
      header: 'Nombre',
      cell: (column) => column.getValue().toUpperCase(),
    }),
    columnHelper.accessor('venta' , {
      header: 'Las Ventas',
      cell: (column) => `$ ${column.getValue()?.toFixed(2)}`,
      footer: () => `$ ${listaMunicipios.reduce((prev, curr) => prev + (curr.venta || 0), 0).toFixed(2)}`,
    })
  ]), [listaMunicipios]);

  return (
    <>
      <main>
        <div className="d-flex flex-row">
        <button 
          onClick={() => navegarAVentas()}>
          Volver a Ventas
            </button>
        </div>
        {listaMunicipios.length > 0 && (
          <Tabla datos={listaMunicipios} columnas={columnas} />
        )}
      </main>
    </>
  );
}
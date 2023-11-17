"use client";
import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Municipio from '@/app/model/Municipio';
import { getMunicipiosFromAPI } from '@/app/services/geo';
import { Tabla } from '@/app/componentes/Tabla/Tabla';
import {
  createColumnHelper,
} from '@tanstack/react-table';
import { toastError, toastSuccess } from '@/app/utils/toast-utils';

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
      toastSuccess("Municipios cargados correctamente");
    } catch (error:any) {
      toastError(error.message)
    }
  }

  useEffect(() => {
    const idProvincia = queryParams?.get('provincia');
    if (idProvincia) {
      cargarMunicipios(Number(idProvincia));
    } else {
      toastError('Parametro provincia es requerido');
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
      cell: (column) => column.getValue()?.toFixed(2),
      footer: () => `$ ${listaMunicipios.reduce((prev, curr) => prev + (curr.venta || 0), 0).toFixed(2)}`,
    })
  ]), [listaMunicipios]);

  const columnasAttributos = [
    {
      cssHeader: 'text-center',
      cssCell: 'ms-4',
      cssFooter: '',
    }, 
    {
      cssHeader: 'text-center',
      cssCell: 'text-end me-4',
      cssFooter: 'text-end me-4',
    },
  ];

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
          <Tabla 
            datos={listaMunicipios} 
            columnas={columnas} 
            className="table-dark"
            columnasAttributos={columnasAttributos} />
        )}
      </main>
    </>
  );
}
"use client";
import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
export const Tabla = (props: any) => {
  const { datos, columnas, className, columnasAttributos } = props;
  
  const table = useReactTable({
    data: datos,
    columns: columnas,
    getCoreRowModel: getCoreRowModel(),
  })


  return (
    <table className={`table table-striped ${className}`}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, indexH) => (
                <th key={header.id} className={columnasAttributos?.length > 0 ? columnasAttributos[indexH].cssHeader : ''}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id} className={columnasAttributos?.length > 0 ? columnasAttributos[index].cssCell : ''}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header, indexF) => (
                <th key={header.id} className={columnasAttributos?.length > 0 ? columnasAttributos[indexF].cssFooter : ''}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
  );
};

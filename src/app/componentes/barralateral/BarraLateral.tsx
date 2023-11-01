import React from 'react';
import './BarraLateral.css'
import Provincia from '../../model/Provincia';

export const BarraLateral = (props:any) => {
  const { menu, handleClick } : { menu: Provincia[], handleClick: Function } = props;

  return (
    <div className="divBarraLateral">
        <ul className="list-group">
          {menu.map((item:Provincia) => (
            <React.Fragment key={`menuIt${item.id}`}>
              <li className="list-group-item">
                <button
                  className='btn btn-link bg-transparent'
                  onClick={() => handleClick(item)}
                >
                  {item.nombre}
                </button>
              </li>
              {item.municipios.length > 0 && (
                item.municipios.map((muni) => (
                  <li key={`muni${muni.id}`} className="list-group-item municipio-list">
                    {muni.nombre}
                </li>
                ))
              )}
            </ React.Fragment>
          ))}
        </ul>
    </div>
  );
}

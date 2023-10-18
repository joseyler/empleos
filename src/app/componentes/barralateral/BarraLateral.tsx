import './BarraLateral.css'

export const BarraLateral = (props:any) => {
  const { menu } = props;

  return (
    <div className="divBarraLateral">
        <ul className="list-group">
          {menu.map((item:string) => (
            <li key={`menuIt${item}`} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
    </div>
  );
}

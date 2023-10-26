"use client";
import './Card.css';
export const Card = (props: any) => {
 
  const { titulo, postulacionClicked } = props;

  // const postularAEmpleo = (event:React.SyntheticEvent) => {
  //   console.log(event);
  //   postulacionClicked(titulo);
  // }

  return (
    <div className='cart-job'>
      <h2>{titulo}</h2>
      <hr />
      <button
        className="btn btn-info"
        // onClick={(event) => postularAEmpleo(event)}
        onClick={() => postulacionClicked(titulo)}
      >
        Postulate!!
        </button>
    </div>
  )
}

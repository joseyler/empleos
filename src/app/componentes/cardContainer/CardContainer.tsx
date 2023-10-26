import './CardContainer.css';

export const CardContainer = (props: any) => {
 
  const { children } = props;

  return (
    <div className='container-cards'>
      {children}
    </div>
  )
}

import "./FormContainer.css";

export const FormContainer = (props: any) => {
  const { children } = props;

  return <div className="container-form">{children}</div>;
};

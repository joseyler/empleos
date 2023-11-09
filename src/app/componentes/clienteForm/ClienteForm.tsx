"use client";
import { SubmitHandler, useForm } from "react-hook-form";

interface Client {
  firstName: string;
  lastName: string;
}

export const ClienteForm = () => {
  const { register, handleSubmit, reset } = useForm<Client>();
  const onSubmit: SubmitHandler<Client> = (client) => {
    console.log(
      "se creo el cliente" + " " + client.firstName + " " + client.lastName
    );
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input {...(register("firstName"), { required: true })} />
        <label>Last Name</label>
        <input {...register("lastName")} />
        <input type="submit" />
      </form>
    </>
  );
};

import { useForm } from "react-hook-form";

export default function ValidatedForm() {
  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: "onSubmit"
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: "First Name required" })} 
             placeholder="First Name" />
      <p style={{ color: "red" }}>{errors.firstName?.message}</p>
      <input {...register("lastName", { required: "Last Name required" })} 
             placeholder="Last Name" />
      <p style={{ color: "red" }}>{errors.lastName?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
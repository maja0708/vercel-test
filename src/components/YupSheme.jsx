import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
  username: yup
    .string()
    .required("Username required")
    .matches(/^[A-Za-z]{3,10}$/, 
             "3–10 letters only"),
    
 userlastname: yup
    .string()
    .required("UserLastname required")
    .matches(/^[A-Za-z]{3,10}$/, 
             "3–10 letters only"),

  password: yup
    .string()
    .required("Password required")
    .matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, 
             "Min 6 chars, 1 uppercase, 1 number")
});


export default function ValidatedForm() {
  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
    <input {...register("username")} placeholder="Username" />
    <p style={{ color: "red" }}>{errors.username?.message}</p>

     <input {...register("userlastname")} placeholder="User Lastname" />
    <p style={{ color: "red" }}>{errors.userlastname?.message}</p>

    <input {...register("password")} placeholder="Password" />
    <p style={{ color: "red" }}>{errors.password?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}


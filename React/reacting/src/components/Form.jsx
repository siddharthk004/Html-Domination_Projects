import React from "react";
import { useForm } from "react-hook-form";

function Form({ formHandleSubmitData }) {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="mt-10 flex justify-center">
      <form
        className="flex gap-10"
        onSubmit={handleSubmit((data) => {
          if(data.name === "")
          {
            reset();
          }
          else {
          formHandleSubmitData(data);
          reset();
          }
        })}
      >
        <input
          {...register("name")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
          {...register("imageURL")}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="imageURL"
        />
        <input
          className="px-5 py-1 text-white font-semibold rounded-md bg-blue-500"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Form;

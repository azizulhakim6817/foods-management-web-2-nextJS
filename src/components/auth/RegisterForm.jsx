"use client";
import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const RegisterForm = () => {
  const route = useRouter();
  const params = useSearchParams();
  //console.log(params) //callbackUrl=%2Fproducts%2F699e51d889f3a5c0ceb0d8a8
  const callBack = params.get("callbackUrl") || "/";
  //console.log(params.get("callbackUrl") || "/"); //products/699e51d889f3a5c0ceb0d8a8

  //! form--data--------------------
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  //! onChange-------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //! handleSubmit----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await postUser(form);

    if (res?.acknowledged) {
      //route.push("/login");
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
        callbackUrl: callBack,
      });
      if (result.ok) {
        Swal.fire("Success", "Register is successfully", "success");
        route.push(callBack);
      }
    }
  };

  return (
    <div>
      <div className="my-8 mx-auto card bg-base-100 dark:text-white dark:bg-black w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-xl font-semibold text-gray-600 text-center dark:text-white">
            Registration
          </h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              {/* name------ */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="input dark:text-black "
                placeholder="Name"
              />
              {/* password-- */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="input dark:text-white dark:bg-black"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="input dark:text-white dark:bg-black"
                placeholder="Password"
              />
              <label className="label">Image URL </label>
              <input
                type="url"
                name="image"
                value={form.image}
                onChange={handleChange}
                className="input dark:text-black"
                placeholder="Image URL"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn bg-accent text-white font-normal mt-4 "
              >
                Register
              </button>
            </fieldset>
          </form>
          <p className="text-center">
            Already registered?
            <Link
              href={`login`}
              className="text-blue-500 underline hover:text-blue-800"
            >
              <span> Login</span>
            </Link>
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

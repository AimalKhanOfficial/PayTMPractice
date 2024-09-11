"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

let timeoutIdEmail;
let timeoutIdPassword;

const LoginInForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState({});
  return (
    <form>
      <div className="flex flex-col mx-auto w-[70%] md:w-[30%] mt-[50px]">
        <input
          className="p-[5px] border rounded-md"
          placeholder="Enter email"
          onChange={(e) => {
            clearTimeout(timeoutIdEmail);
            timeoutIdEmail = setTimeout(() => {
              setFormState({
                ...formState,
                email: e.target.value,
              });
              console.log(">> ", e.target.value);
            }, 500);
          }}
          type="email"
        />
        <input
          className="p-[5px] border rounded-md mt-[10px]"
          placeholder="Enter password"
          onChange={(e) => {
            clearTimeout(timeoutIdPassword);
            timeoutIdPassword = setTimeout(() => {
              setFormState({
                ...formState,
                password: e.target.value,
              });
              console.log(">> ", e.target.value);
            }, 500);
          }}
          type="password"
          autoComplete="on"
        />
        <input
          type="button"
          onClick={async () => {
            const response = await fetch("/api/user/sign-in", {
              method: "POST",
              body: JSON.stringify(formState),
            });
            if (response.ok) {
                router.push(`/`);
            }
          }}
          className="p-[5px] bg-green-300 mt-[10px]"
          value={"Login"}
        />
      </div>
    </form>
  );
};

export default LoginInForm;

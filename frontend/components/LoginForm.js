"use client";

const LoginInForm = () => {
  return (
    <form>
      <div className="flex flex-col mx-auto w-[70%] md:w-[30%] mt-[50px]">
        <input
          className="p-[5px] border rounded-md"
          placeholder="Enter email"
          type="email"
        />
        <input
          className="p-[5px] border rounded-md mt-[10px]"
          placeholder="Enter password"
          type="password"
        />
        <input type="button"
          onClick={() => {
            console.log(">> Clicked");
          }}
          className="p-[5px] bg-green-300 mt-[10px]"
          value={'Login'}
        />
      </div>
    </form>
  );
};

export default LoginInForm;

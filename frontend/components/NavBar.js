import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-center p-[10px] border-b-[1px]">
      <Link className="hover:cursor-pointer" href={'/user/sign-in'}>Login</Link>
      <Link className="ml-[10px] hover:cursor-pointer" href={'#'}>Transactions</Link>
      <Link className="ml-[10px] hover:cursor-pointer" href={'#'}>Example</Link>
    </div> 
  );
};

export default NavBar;

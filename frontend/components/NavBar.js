const NavBar = () => {
  return (
    <div className="flex justify-center p-[10px] border-b-[1px]">
      <div className="hover:cursor-pointer">Home</div>
      <div className="ml-[10px] hover:cursor-pointer">Transactions</div>
      <div className="ml-[10px] hover:cursor-pointer">Example</div>
    </div> 
  );
};

export default NavBar;

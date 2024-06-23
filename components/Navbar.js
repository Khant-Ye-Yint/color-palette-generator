import ModeToggle from './mode-toggle';

const Navbar = () => {
  return (
    <div className=" min-h-[10vh] flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold ">Color Pallete Generator</h1>
      <ModeToggle />
    </div>
  );
};

export default Navbar;

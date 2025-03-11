import { useContext } from "react";
import { AppContext } from "./AppContext";

const Navbar = () => {
  const { userName } = useContext(AppContext);

  return (
    <nav className="navbar navbar-expand-lg bg-primary py-3">
      <div className="container">
        <h3 className='text-info ms-auto'>Welcome, {userName}!</h3>
      </div>
    </nav>
  );
};

export default Navbar;


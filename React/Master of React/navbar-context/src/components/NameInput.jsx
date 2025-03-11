import { useContext } from "react";
import { AppContext } from "./AppContext"

const NameInput = () => {
  const { setUserName } = useContext(AppContext);

  return (
    <input
      type="text"
      onChange={(e) => setUserName(e.target.value)}
      style={{ padding: "8px", marginTop: "20px", width: "200px" }}
    />
  );
};

export default NameInput;

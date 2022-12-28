import { useDispatch, useSelector } from "react-redux";
import {RiCloseCircleFill} from "react-icons/ri"
import "./Error.css";
export const Error = () => {
  const errorValue = useSelector((state) => state.error.value);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({ type: "SET_ERROR", payload: "" });
  };
  return (
    <div style={errorValue.length > 0 ? { display: "block" } : { display: "none" }} className="error__wrap">
      {errorValue}
      <div className="error__close" onClick={handleClose}>
        <RiCloseCircleFill/>
      </div>
    </div>
  );
};

import ClipLoader from "react-spinners/HashLoader";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Spinner.module.css";
const Spinner = (props) => {
  const isShowLoading = useSelector((state) => state.ui.isShowLoading);

  let [color, setColor] = useState("#1E293B");

  return (
    <Fragment>
      {isShowLoading && (
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center pointer-events-none ${classes.overlay}`}
        >
          <ClipLoader color={color} loading={true} size={100} />

          {/* Enable the below for logo based loader */}
          {/* <img
            className={`${classes.foo} bg-slate-700`}
            src={"logo512.png"}
            height="200"
            width="200"
          /> */}
        </div>
      )}
    </Fragment>
  );
};

export default Spinner;

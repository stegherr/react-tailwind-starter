import ClipLoader from "react-spinners/HashLoader";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

const Spinner = (props) => {
  const isShowLoading = useSelector((state) => state.ui.isShowLoading);

  let [color, setColor] = useState("#1E293B");

  return (
    <Fragment>
      {isShowLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <ClipLoader color={color} loading={true} size={100} />
        </div>
      )}
    </Fragment>
  );
};

export default Spinner;

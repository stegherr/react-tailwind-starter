import { useReducer, useCallback } from "react";
import { uiActions } from "../store/ui-slice";
import { authActions } from "../store/auth-slice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function httpReducer(state, action) {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  return state;
}

function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });
  const spinnerDispatcher = useDispatch();
  const history = useHistory();
  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      console.log("coming");
      try {
        spinnerDispatcher(uiActions.setLoading(true));
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
        return Promise.resolve(responseData);
      } catch (error) {
        // console.log(error);
        if (error.status === 403) {
          spinnerDispatcher(authActions.logout());
          history.replace("/login");
        }
        throw error;
        // dispatch({
        //   type: "ERROR",
        //   errorMessage: error.message || "Something went wrong!",
        // });
      } finally {
        spinnerDispatcher(uiActions.setLoading(false));
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;

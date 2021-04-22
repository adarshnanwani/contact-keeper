import { useReducer } from 'react';
import { v4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../types';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (msg, type, timeout = 5000) => {
    const id = v4();
    dispatch({
      type: SET_ALERT,
      payload: { type, msg, id },
    });
    setTimeout(() => removeAlert(id), timeout);
  };

  // Remove Alert
  const removeAlert = (id) => {
    dispatch({ type: REMOVE_ALERT, payload: id });
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        removeAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

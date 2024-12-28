import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {
  if(isLoggedIn) {
    return children; // children component render kr diya
  } else {
    return <Navigate to="/login" />

  }
}

export default PrivateRoute;

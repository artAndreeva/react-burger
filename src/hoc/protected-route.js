import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRouteElement = ({ onlyUnAuth, element, onlyAfterGetCode }) => {

  const location = useLocation();
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn);
  const isResetPassword = useSelector(store => store.resetPassword.isResetPassword);
  const fromPage = location.state?.from?.pathname || '/';

  if (onlyUnAuth && isLoggedIn) {
    return <Navigate to={fromPage} replace state={{ from: location }}/>
  }

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to='/login' replace state={{ from: location }} />
  }

  if (onlyUnAuth && onlyAfterGetCode && (!isLoggedIn || isLoggedIn) && !isResetPassword) {
    return <Navigate to={fromPage} replace state={{ from: location }}/>
  }

  return element;
}

export default ProtectedRouteElement;
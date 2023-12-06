import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useState, useEffect } from 'react';
import { INGREDIENT_MODAL_HEADER } from '../../constants/constants';
import { API_ERROR } from '../../constants/constants';
import { Routes, Route, useLocation, useNavigate, Location } from 'react-router-dom';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OrdersHistory from '../../pages/orders-history/orders-history';
import Feed from '../../pages/feed/feed';
import { getUser } from '../../services/actions/auth';
import { getIngredients } from '../../services/actions/ingredients';
import ProfileForm from '../../form/profile-form/profile-form';
import Ingredients from '../../pages/ingredients/ingredients';
import ProtectedRouteElement from '../../hoc/protected-route';
import { useSelector, useDispatch } from '../../services/types/hooks';
import Order from '../../pages/order/order';
import OrderInfo from '../order-info/order-info';

const App = () => {

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isApiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [apiErrorText, setApiErrorText] = useState('');
  const ingredientsFailed = useSelector(store => store.ingredients.ingredientsFailed);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as { backgroundLocation : Location };

  useEffect(()=> {
    if (ingredientsFailed) {
      setApiErrorModalOpen(true);
      setApiErrorText(API_ERROR);
    }
  }, [ingredientsFailed])

  useEffect(()=> {
    dispatch(getIngredients())
    dispatch(getUser());
  }, [dispatch])

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  }

  const closeOtherModal = () => {
    setIsOrderModalOpen(false);
    setApiErrorModalOpen(false);
  }

  const closeModal = () => {
    navigate(-1)
  }

  return (
    <div className={appStyles.content}>
      <AppHeader />
      <Routes location={locationState?.backgroundLocation || location}>
        <Route path='/' element={<Main onOrderClick={openOrderModal} />} />
        <Route path='/login' element={<ProtectedRouteElement onlyUnAuth element={<Login />} />} />
        <Route path='/register' element={<ProtectedRouteElement onlyUnAuth element={<Register />} />} />
        <Route path='/forgot-password' element={<ProtectedRouteElement onlyUnAuth element={<ForgotPassword />} />} />
        <Route path='/reset-password' element={<ProtectedRouteElement onlyUnAuth onlyAfterGetCode element={<ResetPassword />} />} />
        <Route path='/profile' element={<ProtectedRouteElement element={<Profile />} />}>
          <Route path='' element={<ProtectedRouteElement element={<ProfileForm />} />}/>
          <Route path='orders' element={<ProtectedRouteElement element={<OrdersHistory />} />}/>
        </Route>
        <Route path='/profile/orders/:number' element={<ProtectedRouteElement element={<Order />} />}/>
        <Route path='/feed' element={<Feed />} />
        <Route path='/feed/:number' element={<Order />} />
        <Route path='/ingredients/:id' element={<Ingredients />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>

      {locationState?.backgroundLocation && (
        <Routes>
          <Route path='/' element={<Main onOrderClick={openOrderModal} />} />
          <Route
            path="/ingredients/:id"
            element={<Modal onClose={closeModal} header={INGREDIENT_MODAL_HEADER}><IngredientsDetails /></Modal>}/>
        </Routes>
      )}

      {locationState?.backgroundLocation && (
        <Routes>
          <Route
            path="/profile/orders/:number"
            element={<ProtectedRouteElement element={<Modal onClose={closeModal}><OrderInfo /></Modal>} />} />
        </Routes>
      )}

      {locationState?.backgroundLocation && (
        <Routes>
          <Route
            path="/feed/:number"
            element={<Modal onClose={closeModal}><OrderInfo /></Modal>}/>
        </Routes>
      )}

      {isOrderModalOpen &&
        <Modal
          onClose={closeOtherModal}
        >
          <OrderDetails />
        </Modal>
      }

      {isApiErrorModalOpen &&
        <Modal
          onClose={closeOtherModal}
        >
          <p className='text text_type_main-large mt-6'>{apiErrorText}</p>
        </Modal>
      }
    </div>
  );
}

export default App;

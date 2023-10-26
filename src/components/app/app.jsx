import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useState, useEffect } from 'react';
import { INGREDIENT_MODAL_HEADER } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { API_ERROR } from '../../constants/constants';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import ForgotPassword from '../pages/forgot-password/forgot-password';
import ResetPassword from '../pages/reset-password/reset-password';
import Profile from '../pages/profile/profile';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import Orders from '../pages/orders/orders';
import OrdersHistory from '../pages/orders-history/orders-history';
import { getUser } from '../../services/actions/auth';
import { getIngredients } from '../../services/actions/ingredients';
import ProfileForm from '../form/profile-form/profile-form';
import Ingredients from '../pages/ingredients/ingredients';

const App = () => {

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isApiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [apiErrorText, setApiErrorText] = useState('');
  const ingredientsFailed = useSelector(store => store.ingredients.ingredientsFailed);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=> {
    if (ingredientsFailed) {
      setApiErrorModalOpen(true);
      setApiErrorText(API_ERROR);
    }
  }, [ingredientsFailed])

  useEffect(()=> {
    dispatch(getUser());
    dispatch(getIngredients())
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
      <Routes location={(location.state && location.state.background) || location}>
        <Route path='/' element={
          <Main
          onOrderClick={openOrderModal}
          />}
        />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/profile' element={<Profile />}>
          <Route path='' element={<ProfileForm />}/>
          <Route path='orders' element={<OrdersHistory />}/>
        </Route>
        <Route path="/ingredients/:id" element={<Ingredients />} />
        <Route path='/profile/orders/:id' element={<Orders />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>

      {location.state && location.state.background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={<Modal onClose={closeModal} header={INGREDIENT_MODAL_HEADER}><IngredientsDetails /></Modal>}/>
        </Routes>
      )
      }

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

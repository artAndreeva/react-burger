import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useState, useEffect } from 'react';
import { INGREDIENT_MODAL_HEADER } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { closeIngredient } from '../../services/actions/ingredient-modal';
import { API_ERROR } from '../../constants/constants';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import ForgotPassword from '../pages/forgot-password/forgot-password';
import ResetPassword from '../pages/reset-password/reset-password';
import Profile from '../pages/profile/profile';
import Ingredients from '../pages/ingredients/ingredients';
import NotFoundPage from '../pages/not-found-page/not-found-page';

const App = () => {
  const [isIngredientsModalOpen, setIngredientsIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isApiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [apiErrorText, setApiErrorText] = useState('');
  const ingredientsFailed = useSelector(store => store.ingredients.ingredientsFailed);

  const dispatch = useDispatch();

  useEffect(()=> {
    if (ingredientsFailed) {
      setApiErrorModalOpen(true);
      setApiErrorText(API_ERROR);
    }
  }, [ingredientsFailed])

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  }

  const openIngredientsModal = () => {
    setIngredientsIsModalOpen(true);
  }

  const closeModal = () => {
    setIsOrderModalOpen(false);
    setApiErrorModalOpen(false);
  }

  const closeIngredientModal = () => {
    setIngredientsIsModalOpen(false);
    dispatch(closeIngredient())
  }

  return (
    <div className={appStyles.content}>
      <AppHeader />
      <Routes>
        <Route path='/' element={
          <Main
          onIngredientClick={openIngredientsModal}
          onOrderClick={openOrderModal}
          />}
        />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgot-password' element={<ForgotPassword />}/>
        <Route path='/reset-password' element={<ResetPassword />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/ingredients/:id' element={<Ingredients />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>

      {isIngredientsModalOpen &&
        <Modal
          onClose={closeIngredientModal}
          header={INGREDIENT_MODAL_HEADER}
        >
          <IngredientsDetails />
        </Modal>
      }

      {isOrderModalOpen &&
        <Modal
          onClose={closeModal}
        >
          <OrderDetails />
        </Modal>
      }

      {isApiErrorModalOpen &&
        <Modal
          onClose={closeModal}
        >
          <p className='text text_type_main-large mt-6'>{apiErrorText}</p>
        </Modal>
      }
    </div>
  );
}

export default App;

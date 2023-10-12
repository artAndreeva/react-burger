import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useState } from 'react';
import { INGREDIENT_MODAL_HEADER } from '../../constants/constants';
import { useDispatch } from 'react-redux';
import { closeIngredient } from '../../services/actions/ingredient-modal';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isIngredientsModalOpen, setIngredientsIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isApiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [apiErrorText, setApiErrorText] = useState('');

  const dispatch = useDispatch();

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
      {!isLoading &&
        <>
            <AppHeader />
              <Main
                onIngredientClick={openIngredientsModal}
                onOrderClick={openOrderModal}
              />
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
        </>
      }
    </div>
  );
}

export default App;

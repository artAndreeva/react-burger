import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useState } from 'react';
import { INGREDIENT_MODAL_HEADER } from '../../constants/constants';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isIngredientsModalOpen, setIngredientsIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isApiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const [apiErrorText, setApiErrorText] = useState('');

  const openOrderModal = () => {
    setIsOrderModalOpen(true);
  }

  const openIngredientsModal = (item) => {
    setSelectedIngredient(item);
    setIngredientsIsModalOpen(true);
  }

  const closeModal = () => {
    setIsOrderModalOpen(false);
    setIngredientsIsModalOpen(false);
    setApiErrorModalOpen(false);
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
                onClose={closeModal}
                header={INGREDIENT_MODAL_HEADER}
              >
                <IngredientsDetails selectedIngredient={selectedIngredient}/>
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

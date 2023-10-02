import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/api'
import { INGREDIENT_MODAL_HEADER, API_ERROR } from '../../constants/constants';
import { ingredientsContext } from '../../context/ingredientsContext';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isIngredientsModalOpen, setIngredientsIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isApiErrorModalOpen, setApiErrorModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const [apiErrorText, setApiErrorText] = useState('');

  const getProductData = () => {
    setIsLoading(true);
      getIngredients()
      .then((res) => {
        setIngredients(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setApiErrorText(API_ERROR);
        setApiErrorModalOpen(true);
      });
  }

  useEffect(() => {
    getProductData();
  }, []);

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
          <ingredientsContext.Provider value={ingredients}>
            <Main
              ingredients={ingredients}
              onIngredientClick={openIngredientsModal}
              onOrderClick={openOrderModal}
            />
          </ingredientsContext.Provider>

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

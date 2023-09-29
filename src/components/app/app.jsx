import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import IngredientsDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-details/order-details';
import { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/api'
import { ingredientModalHeader, apiError } from '../../constants/constants';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isIngredientsModalOpen, setIngredientsIsModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState({});

  const getProductData = async() => {
    setIsLoading(false);
    try {
      const res = await getIngredients();
      setIngredients(res.data);
    } catch {
      console.log(apiError);
    } finally {
      setTimeout(() => {
        setIsLoading(true);
    }, 500)}
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

  const closeOrderModal = () => {
    setIsOrderModalOpen(false);
  }

  const closeIngredientsModal = () => {
    setIngredientsIsModalOpen(false);
  }

  return (
    <div className={appStyles.content}>
      {isLoading &&
        <>
          <AppHeader />
          <Main
            ingredients={ingredients}
            onIngredientClick={openIngredientsModal}
            onOrderClick={openOrderModal}/>

          {isIngredientsModalOpen &&
            <Modal
              onClose={closeIngredientsModal}
              header={ingredientModalHeader}
            >
              <IngredientsDetails selectedIngredient={selectedIngredient}/>
            </Modal>
          }

          {isOrderModalOpen &&
            <Modal
              onClose={closeOrderModal}
            >
              <OrderDetails />
            </Modal>
          }

        </>
      }
    </div>
  );
}

export default App;

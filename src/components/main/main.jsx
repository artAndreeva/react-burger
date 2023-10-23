import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import mainStyles from './main.module.css';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Main = ({ onIngredientClick, onOrderClick }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={mainStyles.main}>
        <BurgerIngredients onIngredientClick={onIngredientClick} />
        <BurgerConstructor onOrderClick={onOrderClick}/>
      </main>
    </DndProvider>
  );
}

Main.propTypes = {
  onIngredientClick: PropTypes.func.isRequired,
  onOrderClick: PropTypes.func.isRequired
};


export default Main;

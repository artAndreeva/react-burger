import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import mainStyles from './main.module.css';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Main = ({ onOrderClick }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={mainStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor onOrderClick={onOrderClick}/>
      </main>
    </DndProvider>
  );
}

Main.propTypes = {
  onOrderClick: PropTypes.func.isRequired
};


export default Main;

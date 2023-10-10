import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import mainStyles from './main.module.css';
import PropTypes from 'prop-types';

const Main = ({ onIngredientClick, onOrderClick }) => {
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients onIngredientClick={onIngredientClick} />
      <BurgerConstructor onOrderClick={onOrderClick}/>
    </main>
  );
}

Main.propTypes = {
  onIngredientClick: PropTypes.func.isRequired,
  onOrderClick: PropTypes.func.isRequired
};


export default Main;

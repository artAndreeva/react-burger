import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import mainStyles from './main.module.css';
import { INGREDIENS_PROP_TYPES } from '../../constants/constants';
import PropTypes from 'prop-types';

const Main = ({ ingredients, onIngredientClick, onOrderClick }) => {
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients ingredients={ingredients} onIngredientClick={onIngredientClick} />
      <BurgerConstructor ingredients={ingredients} onOrderClick={onOrderClick}/>
    </main>
  );
}

Main.propTypes = {
  ingredients: PropTypes.arrayOf(INGREDIENS_PROP_TYPES).isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  onOrderClick: PropTypes.func.isRequired
};


export default Main;

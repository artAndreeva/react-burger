import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import mainStyles from './main.module.css'

const Main = ({ingredients, onIngredientClick, onOrderClick}) => {
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients ingredients={ingredients} onIngredientClick={onIngredientClick} />
      <BurgerConstructor ingredients={ingredients} onOrderClick={onOrderClick}/>
    </main>
  )
}

export default Main;
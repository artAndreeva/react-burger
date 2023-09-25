import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import mainStyles from './main.module.css'

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  )
}

export default Main;
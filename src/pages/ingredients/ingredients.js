import styles from './ingredients.module.css';
import IngredientsDetails from '../../components/ingredient-details/ingredient-details';

const Ingredients = () => {
  return (
    <main className={styles.main}>
      <IngredientsDetails />
    </main>
  )
}

export default Ingredients;

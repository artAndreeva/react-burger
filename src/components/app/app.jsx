import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import { useEffect, useState } from 'react';
import { getIngredients } from '../../utils/api'

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductData = async() => {
    setIsLoading(false);
    try {
      const res = await getIngredients();
      setIngredients(res.data);
    } catch {
      console.log('Ошибка');
    } finally {
      setTimeout(() => {
        setIsLoading(true);
    }, 500)}
  } 

  useEffect(() => {
    getProductData(); 
  }, []); 

  return (
    <div className={appStyles.content}>
      {isLoading &&
        <>
          <AppHeader />
          <Main ingredients={ingredients} />
        </>
      }
    </div>
  );
}

export default App;

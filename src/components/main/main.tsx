import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import mainStyles from './main.module.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FunctionComponent } from 'react';

interface IMainProps {
  onOrderClick: () => void;
}

const Main: FunctionComponent<IMainProps> = ({ onOrderClick }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={mainStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor onOrderClick={onOrderClick}/>
      </main>
    </DndProvider>
  );
}

export default Main;

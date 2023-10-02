import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import {useEffect, useState, useMemo, useContext } from  'react';
import PropTypes from 'prop-types';
import { ingredientsContext } from '../../context/ingredientsContext';
import { TYPE } from '../../constants/constants';
import { sendOrder } from '../../utils/api';

const BurgerConstructor = ({ onOrderClick }) => {

  const [endIngredient, setEndIngredient] = useState({});
  const [middleIngredient, setMiddleIngredient] = useState([]);
  const ingredients = useContext(ingredientsContext);

  useEffect(()=> {
    setEndIngredient(filterEndIngredient);
    setMiddleIngredient(filterMiddleIngredient);
  }, []);

  const filterEndIngredient = useMemo(
    () => {
      return ingredients.filter(item => item.type === TYPE.bun)[0];
    },
    [ingredients]
  );

  const filterMiddleIngredient = useMemo(
    () => {
      return ingredients.filter(item => item.type !== TYPE.bun);
    },
    [ingredients]
  );

  const handleSendOrder = () => {
    const ingredientsInOrder = ingredients.map(item => item._id);
    sendOrder(ingredientsInOrder)
    .then((res) => {
      onOrderClick(res.order.number);
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  return (
    <section className={burgerConstructorStyles.column}>
      <div className={burgerConstructorStyles.container}>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${endIngredient.name} (верх)`}
            price={endIngredient.price}
            thumbnail={endIngredient.image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
            {middleIngredient.map((item) => (
              <li key={item._id} className={burgerConstructorStyles.item}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            ))}
        </ul>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${endIngredient.name} (низ)`}
            price={endIngredient.price}
            thumbnail={endIngredient.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyles.summary}>
        <div className={burgerConstructorStyles.price}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={handleSendOrder}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  onOrderClick: PropTypes.func.isRequired
};

export default BurgerConstructor;

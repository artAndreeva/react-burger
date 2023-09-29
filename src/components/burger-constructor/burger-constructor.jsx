import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import {useEffect, useState} from  'react'

const BurgerConstructor = ({ ingredients, onOrderClick }) => {

  const [endElem, setEndElem] = useState({})
  const [middleElem, setMiddleElem] = useState([])

  useEffect(()=> {
    setEndElem(ingredients[0]);
    setMiddleElem(ingredients.slice(1, ingredients.length))
  }, [ingredients])

  return (
    <section className={burgerConstructorStyles.column}>
      <div className={burgerConstructorStyles.container}>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${endElem.name} (верх)`}
            price={endElem.price}
            thumbnail={endElem.image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
            {middleElem.map((item) => (
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
            text={`${endElem.name} (низ)`}
            price={endElem.price}
            thumbnail={endElem.image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyles.summary}>
        <div className={burgerConstructorStyles.price}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={onOrderClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor;
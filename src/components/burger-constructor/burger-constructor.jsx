import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerConstructorStyles from './burger-constructor.module.css';
import burgersData from '../../utils/data';

const BurgerConstructor = () => {
  return (
    <section className={burgerConstructorStyles.column}>
      <div className={burgerConstructorStyles.container}>
        <div className={burgerConstructorStyles.end}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={burgersData[0].name}
            price={burgersData[0].price}
            thumbnail={burgersData[0].image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
            {burgersData.slice(1, burgersData.length -1).map((item) => (
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
            text={burgersData[burgersData.length - 1].name}
            price={burgersData[burgersData.length - 1].price}
            thumbnail={burgersData[burgersData.length - 1].image}
          />
        </div>
      </div>
      <div className={burgerConstructorStyles.summary}>
        <div className={burgerConstructorStyles.price}>
          <span className='text text_type_digits-medium'>610</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor;
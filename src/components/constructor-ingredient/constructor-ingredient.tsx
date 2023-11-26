import { useDispatch } from '../../services/types/hooks';
import { useRef, FunctionComponent } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorIngredientStyles from './constructor-ingredient.module.css';
import { useDrag, useDrop } from 'react-dnd';
import { deleteIngredient, sortIngredients } from '../../services/actions/burger-ingredients';
import { TIngredient } from '../../types/types';

interface IConstructorIngredientProps {
  ingredient: TIngredient;
  index: number;
}

const ConstructorIngredient: FunctionComponent<IConstructorIngredientProps> = ({ ingredient, index }) => {

  const { uniqId } = ingredient;

  const ref = useRef<HTMLLIElement>(null);

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'list',
    item: () => {
      return {uniqId, index}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ handlerId }, dropTarget] = useDrop({
    accept: 'list',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: {index: number} | any, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      if (clientOffset !== null) {
         const hoverClientY = clientOffset.y - hoverBoundingRect.top
         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
      }

      dispatch(sortIngredients({dragIndex, hoverIndex}))

      item.index = hoverIndex
    },
  })

  const opacity = isDragging ? 0 : 1

  dragRef(dropTarget(ref))

  const handleClose = (uniqId: string) => {
    dispatch(deleteIngredient(uniqId))
  }

  return (
      <li className={constructorIngredientStyles.item} ref={ref} style={{ opacity }} data-handler-id={handlerId}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={() => handleClose(ingredient.uniqId as string)}
        />
      </li>
  );
}

export default ConstructorIngredient;

import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import constructorIngredientStyles from './constructor-ingredient.module.css';
import { useDrag, useDrop } from 'react-dnd';
import { deleteIngredient, sortIngredients } from '../../services/actions/burger-ingredients';
import PropTypes from 'prop-types';
import { INGREDIENS_PROP_TYPES } from '../../constants/constants';

const ConstructorIngredient = ({ item, index }) => {

  const { uniqId } = item;

  const ref = useRef();

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
    hover(item, monitor) {
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
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      dispatch(sortIngredients({dragIndex, hoverIndex}))

      item.index = hoverIndex
    },
  })

  const opacity = isDragging ? 0 : 1

  dragRef(dropTarget(ref))

  const handleClose = (uniqId) => {
    dispatch(deleteIngredient(uniqId))
  }

  return (
      <li className={constructorIngredientStyles.item} ref={ref} style={{ opacity }} data-handler-id={handlerId}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={() => handleClose(item.uniqId)}
        />
      </li>
  );
}

ConstructorIngredient.propTypes = {
  index: PropTypes.number.isRequired,
  item: INGREDIENS_PROP_TYPES.isRequired
};

export default ConstructorIngredient;

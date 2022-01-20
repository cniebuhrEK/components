import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper'
import styled from 'styled-components'
import DragIcon from '../../icons/DragIcon'

export const DnDListItem = ({
  children,
  index,
  moveCard,
  className,
  BeforeIconComponent,
  item
}) => {
  const ref = useRef(null)
  const [{ handlerId }, drop] = useDrop({
    accept: 'list-item',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      // @ts-ignore
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      // @ts-ignore
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      // @ts-ignore
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveCard(dragIndex, hoverIndex)
      // @ts-ignore
      item.index = hoverIndex
    }
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'list-item',
    item: () => {
      return { index }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })
  const opacity = isDragging ? 0.3 : 1
  drag(drop(ref))
  return (
    <DragItem
      className={className}
      style={{ opacity }}
      data-handler-id={handlerId}
    >
      {BeforeIconComponent && <BeforeIconComponent item={item} />}
      <DragIconWrapper ref={ref}>
        <DragIcon />
      </DragIconWrapper>
      {children}
    </DragItem>
  )
}

interface DnDListProps {
  itemClassName?: string
  containerClassName?: string
  onChange: (card, dragItem) => void
  items: any[]
  ChildComponent: any
  BeforeIconComponent?: any
  componentProps?: any
}

export const DnDList = ({
  itemClassName = '',
  containerClassName = '',
  onChange,
  items = [],
  ChildComponent,
  BeforeIconComponent,
  componentProps = {}
}: DnDListProps) => {
  const [cards, setCards] = useState(items)
  const [dragItem, setDragItem] = useState(null)

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex]
      setDragItem(dragCard)
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      )
    },
    [cards]
  )

  useEffect(() => {
    onChange(cards, dragItem)
  }, [cards, dragItem])

  useEffect(() => {
    setCards(items)
  }, [items])

  return (
    <ListWrapper className={containerClassName}>
      {cards.map((card, i) => {
        return (
          <DnDListItem
            className={itemClassName}
            key={`card-${i}`}
            index={i}
            moveCard={moveCard}
            BeforeIconComponent={BeforeIconComponent}
            item={card}
          >
            <ChildComponent item={card} index={i} {...componentProps} />
          </DnDListItem>
        )
      })}
    </ListWrapper>
  )
}
export default DnDList

const ListWrapper = styled.div`
  width: 100%;
`

const DragIconWrapper = styled.div`
  margin-right: 15px;
  font-size: 12px;
  cursor: grab;
  display: flex;
  align-items: center;
`

const DragItem = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
`

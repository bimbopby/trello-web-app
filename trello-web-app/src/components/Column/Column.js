import React from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import './Column.scss'
import Card from '../Card/Card'
import { mapOrder } from '../../utilities/sorts'
import { Dropdown } from 'react-bootstrap'


function Column( props) {
  const { column, onCardDrop } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">{column.title}</div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-btn" size='sm' id="dropdown-basic" />
            

            <Dropdown.Menu>
              <Dropdown.Item>Add card...</Dropdown.Item>
              <Dropdown.Item>Remove column...</Dropdown.Item>
              <Dropdown.Item>Move all card in this column</Dropdown.Item>
              <Dropdown.Item>Archive all card in this column</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
       
      </header>
      <div className="card-list">
        <Container
          groupName="col"
          onDrop={dropResult => onCardDrop(column.id, dropResult)}
          getChildPayload={index => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: 'card-drop-preview'
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable> ))}
        </Container>

      </div>
      <footer>
        <div className="footer-action">
          <i className="fa fa-plus icon" /> Add another card
        </div>
      </footer>
    </div>
  )
}

export default Column
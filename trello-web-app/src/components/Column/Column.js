import React, { useCallback, useEffect, useState } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import './Column.scss'
import Card from '../Card/Card'
import { mapOrder } from '../../utilities/sorts'
import { Dropdown, Form } from 'react-bootstrap'
import ConfirmModal from '../../Commonn/ConfirmModal'
import { type } from '@testing-library/user-event/dist/type'
import {MODAL_ACTION_CONFIRM } from '../../utilities/constants'
import { saveContentAfterPressEnter,selectAllInlineText} from '../../utilities/contentEditable'


function Column( props) {
  const { column, onCardDrop, onUpdateColumn } = props
  const cards = mapOrder(column.cards, column.cardOrder, 'id')
  
  const {showConfirmModal, setShowConfirmModal} = useState(false)
  const toggleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal)

  const [columnTitle, setColumnTitle] = useState('')
  const handleColumnTitleChange = useCallback((e) => setColumnTitle(e.target.value),[] )
  

  useEffect(() => {
    setColumnTitle(column.title)
  },[column.title])

  const onConfirmModalAction  = (type) => {
    if (type === MODAL_ACTION_CONFIRM) {
//rm column
      const newColumn = {
        ...column,
        _destroy: true
      }
      onUpdateColumn(newColumn)
    }
    toggleShowConfirmModal()
  }

 
  const handleColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columnTitle
    }
    onUpdateColumn(newColumn)
  }
  } 

  

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
         
          <Form.Control
              className="trello-content-editable"
              size ="sm"
              type="text"
              placeholder="Enter column title.."           
              value={columnTitle}
              onChange={handleColumnTitleChange}
              onBlur={handleColumnTitleBlur}
              onKeyDown={saveContentAfterPressEnter}
              onMouseDown={e => e.preventDefault()}
              onClick={selectAllInlineText }
              spellCheck = "false"
              
            />
        </div>
        <div className="column-dropdown-actions">
          <Dropdown>
            <Dropdown.Toggle className="dropdown-btn" size='sm' id="dropdown-basic" />
            

            <Dropdown.Menu>
              <Dropdown.Item>Add card...</Dropdown.Item>
              <Dropdown.Item onClick={toggleShowConfirmModal}>Remove column...</Dropdown.Item>
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

      <ConfirmModal 
        show={showConfirmModal}
        onAction={onConfirmModalAction}
        title="Remove column"
        content={'Are you sure to remove <strong>${column.title}</strong> <br>! All related cards will be removed'}
      />
    </div>
  )
}

export default Column
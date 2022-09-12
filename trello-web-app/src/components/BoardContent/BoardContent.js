import React, { useEffect, useState } from 'react'
import {isEmpty} from 'lodash'
import './BoardContent.scss'
import Column from '../Column/Column'
import { mapOrder } from '../../utilities/sorts'
import { initialData } from '../../action/initialData'

function BoardContent(){
    const [board,setBoard] = useState({})
    const [columns,setColumn] = useState([])

    useEffect(() => {
        const boardFromDB = initialData.boards.find(board => board.id === 'board-1')

        if (boardFromDB){
            setBoard(boardFromDB)
            
            //sort columns
        
            setColumn(mapOrder(boardFromDB.columns, boardFromDB.columnOrder,'id'))
        }
    },[])

        if(isEmpty(board)) {
            return <div className="not-found" style={{'padding':'10px','color':'white'}} >Board not found</div>
        }
    
 
    return(
        <div className="board-content">
       {columns.map((column,index) =>  <Column key={index} column={column} /> )}
        
        </div>
    )
}


export default BoardContent
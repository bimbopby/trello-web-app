export const initialData = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ['column-1', 'column-2', 'column-3'],
      columns: [
        {
          id:'column-1',
          boardId: 'board-1',
          title: 'To do column',
          cardOrder: ['card-1', 'card-2', 'card-3'],
          cards:[
            { id: 'card-1', boardId:'board-1', columnId:'column-1', title:'Title card 1', cover:null },
            { id: 'card-2', boardId:'board-1', columnId:'column-1', title:'Title card 2', cover:null },
            { id: 'card-3', boardId:'board-1', columnId:'column-1', title:'Title card 3', cover:'https://i.pinimg.com/originals/98/d5/f5/98d5f5382740a36a45e06e29f83c7434.png' }

          ]
        },
        {
          id:'column-2',
          boardId: 'board-1',
          title: 'Inprogress column',
          cardOrder: ['card-4', 'card-5', 'card-6'],
          cards:[
            { id: 'card-4', boardId:'board-1', columnId:'column-2', title:'Title card 4', cover:null },
            { id: 'card-5', boardId:'board-1', columnId:'column-2', title:'Title card 5', cover:null },
            { id: 'card-6', boardId:'board-1', columnId:'column-2', title:'Title card 6', cover:null }
          ]
        },
        {
          id:'column-3',
          boardId: 'board-1',
          title: 'Done column',
          cardOrder: ['card-7', 'card-8', 'card-9'],
          cards:[
            { id: 'card-7', boardId:'board-1', columnId:'column-3', title:'Title card 7', cover:null },
            { id: 'card-8', boardId:'board-1', columnId:'column-3', title:'Title card 8', cover:null },
            { id: 'card-9', boardId:'board-1', columnId:'column-3', title:'Title card 9', cover:null }
          ]
        }
      ]
    }
  ]
}
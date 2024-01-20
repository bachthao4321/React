import React, {useState} from 'react'
import Board from './Components/KanbanBoard/Board/Board'
import './App.css'
import Editable from './Components/KanbanBoard/Editable/Editable'


function App() {
  const [boards,setBoards] = useState([
    {
      id:Date.now() + Math.random(),
      title:'To Do',
      cards:[
        {
          id:Date.now() + Math.random(),
          title:'Login view form',
          labels:[{
            text:'enchancement',
            color: '#ba68c8'
          }],
          desc:''
        },
        {
          id:Date.now() + Math.random(),
          title:'Implement Landing Page',
          labels:[{
            text:'enchancement',
            color:"#ba68c8"
          }],
          desc:''
        }
      ]
    },
    {
      id:Date.now() + Math.random(),
      title:'In Progress',
      cards:[
        {
          id:Date.now() + Math.random(),
          title:'Landing Page hero block',
          labels:[{
            text:'Needs Review',
            color: '#00c853'
          },
          {
            text:'Design',
            color:"#ba68c8"
          }],
          desc:''
      },
      {
        id:Date.now() + Math.random(),
        title:'Landing Page footer',
        labels:[{
          text:'Needs Review',
          color: '#00c853'
        },
        {
          text:'Design',
          color:"#ba68c8"
        }],
        desc:''
    },
    {
      id:Date.now() + Math.random(),
      title:'Project setup documentation',
      labels:[{
        text:'Docs',
        color: '#ffb74d'
      }],
      desc:''
  }
    
    ],
        
    }
  ])
  

  const addCard=(title,bid)=> {
    const card={
      id:Date.now() + Math.random(),
      title,
      labels :[],
      tasks :[],
      desc :""
    };
    const index=boards.findIndex((item) => item.id === bid)
    if (index < 0){ return ;}
     const tempBoards = [...boards] 
     tempBoards[index].cards.push(card)
     setBoards(tempBoards);
  }
  

  const removeCard=(cid,bid)=>{
    const bIndex =boards.findIndex((item) => item.id === bid)
    if (bIndex <0) return ;
    const cIndex =boards[bIndex].cards.findIndex((item) => item.id === cid)
    if (cIndex <0) return ;
    const tempBoards=[...boards]
    // tempBoards = boards.filter((item) => item.id !==)
    tempBoards[bIndex].cards.splice(cIndex,1)
    setBoards(tempBoards)

  }



  const updateCard = (cid,bid,card) => {
    const bIndex = boards.findIndex((item) => item.id === bid)
    if (bIndex < 0) return;
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid)
    if (cIndex < 0) return ;
    boards[bIndex].cards[cIndex] = card
    const tempBoards = [...boards]
    tempBoards[bIndex].cards[cIndex] = card
    setBoards(tempBoards)
  }
  const addBoard=(title) => {
      setBoards([
        ...boards,
        {
        id:Date.now() + Math.random(),
        title,
        cards: [],

      }])
  }
  const removeBoard = bid => {
    const tempBoards=boards.filter((item) => item.id !== bid)
    setBoards(tempBoards)
  }
  return (
    <div className="app">
      <div className="app_outer">
        <div className="app_boards">
          {
            boards.map((item)=><Board key={item.id}
            board={item} removeBoard={removeBoard}
            addCard={addCard}
            removeCard={removeCard}
            updateCard={updateCard}
             />) }
          <Editable className='app_boards_board_add' text="Add Board" placeholder="Enter board title"
          onSubmit={(value) => addBoard(value)}/>

        </div>
      </div>
    </div>

  )
}


export default App;

import React, {useState} from 'react'
import './Board.css'
import {MoreHorizontal} from 'react-feather'
import Card from '../Cards/Card'
import Editable from '../Editable/Editable'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

export default function Board(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 20;
  const options = ['Delete Board', 'More ---']
  return (
    <div className='board'>
      <div className="board-top">
        <p className='board-title'>{props.board?.title} <span>{`${props.board?.cards.length}`}</span> </p> 
        <div className="ListEdit">
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizontal/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => option ==='Delete Board'? props.removeBoard(props.board?.id) : ""}>
            {option}
          </MenuItem>
        ))}
      </Menu>
        {/* <MoreHorizontal onClick={() => setDeleteBoard(!deleteBoard) } />
        {deleteBoard && (
          <button onClose={() => setDeleteBoard(false)}>
            <p onClick={() => props.removeBoard(props.board?.id)}>Delete Board </p> </button>
        )}
        </div>

        </div> */}</div>  
      <div className="board-cards">
        {props.board?.cards?.map((item) =>(
          <Card key={item.id} card={item}
          removeCard={props.removeCard} boardId={props.board?.id}
          updateCard={props.updateCard}
          />
        ))}
        <Editable 
        displayClass="boards_cards_add"
        placeholder="Enter Card Title"
        onSubmit={(value) => props.addCard(value,props.board?.id)}
        />
        
      </div>
           
    </div>
    </div>
  )
}

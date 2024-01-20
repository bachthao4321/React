import React, {useState} from 'react'
import './card.css'
import Chip from '../Chip/Chip'
import {Trash2} from 'react-feather'
import Cardinfo from './Cardinfo/Cardinfo'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function Card(props) {
    const [showModal, setShowModal] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
         {
          showModal && <Cardinfo onClose={() => setShowModal(false)} 
          card={props.card} updateCard={props.updateCard}
            boardId={props.boardId} />
        }
         <Box  sx={{
          boxShadow: 2,
          height: '5rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '1rem',
          fontWeight: '700',
        }}>
    <div className='card' >
      <div className="card-top"  >
      <div className="card-title" onClick={() => setShowModal(true)} >
        {props.card?.title} </div>
        {/* <Trash2 onClick={() => props.removeCard(props.card?.id,props.boardId)}  className='bin'></Trash2>    */}
        <Trash2  variant='outlined'onClick={handleClickOpen}  className='bin'> </Trash2>  
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this Card?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you delete, you cant undo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => props.removeCard(props.card?.id,props.boardId)} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <div className="chip">
            {
                props.card?.labels?.map((item,index) =>
                <Chip key={item.index} text={item.text} color={item.color}/>)
            }
            </div>
        </div>
        </div>
        </Box>
      

      </>
  )
}

export default Card

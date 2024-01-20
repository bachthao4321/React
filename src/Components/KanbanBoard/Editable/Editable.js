import React, { useState } from 'react'
import {X, Plus} from 'react-feather'
import './editable.css'
import Button from '@mui/material/Button'


function Editable(props) {
    const [showEdit, setShowEdit] = useState(false)
    const [inputValue, setInputValue] = useState(props.default||"")
  return (
    <div className='editable'> 
    {
        showEdit ? 
      (<form 
    className={`editable-edit ${props.editClass|| ""}`} 
      onSubmit={(event) => {event.preventDefault(); if(props.onSubmit)props.onSubmit(inputValue)}}>
        <input 
        type='text'placeholder={props.placeholder} 
        onChange={(e) => setInputValue(e.target.value)} />
            <div className='edit-card'>
            <Button variant="contained" color="success"><button type='submit'>{props.buttonText || "Add"}</button></Button>
                <X  onClick={ () => setShowEdit(false)}/>
            </div>
        </form>
  ) : (
        <p className={`editable-display ${props.displayClass || ""}` } 
        onClick={() => setShowEdit(true)}><Plus />{props.text || "Add Card"}</p>
  )}
    </div>
  )}


export default Editable

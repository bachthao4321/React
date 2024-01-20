import React from 'react'
import './modal.css'
function Modal(props) {
  return (
    <div className='modal' onClick={() => props.onClose ? props.onClose() : ""}> 
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        {props.children}
      </div>
    </div>
  )
}

export default Modal

import './cardinfo.css'
import Modal from '../../Modal/Modal'
import React, {useEffect, useState} from 'react'
import Editable from '../../Editable/Editable'
import Chip from '../../Chip/Chip'
function Cardinfo(props) {
    const colors = [
        'green',
        'blue',
        'red',
        'pink',
        'yellow',
        'grey'
    ] 
    const [activeColor, setActiveColor] = useState("")
    const [values, setValues] = useState({...props.card})
    const addLabel = (value,color) => {
        const index= values.labels?.findIndex(item => item.text === value)
        if (index > -1) return ;
         const label= {
                text:value,
                color
            }
        setValues({...values,labels:[...values.labels,label]})
        setActiveColor(label.color);
    }
    const removeLabel = (text) => {
        const tempLabels = values.labels?.filter(item => item.text !== text)
        setValues({...values, labels : tempLabels});
    }
    useEffect(() => {
        props.updateCard(props.card.id, props.boardId, values)}
    ,[values])
  return (
      <Modal onClose={() => props.onClose()}>
        <div className="cardinfo">
            <div className="cardinfo-box">
                <div className="cardinfo-box-title">
                    Title
                </div>
            <div className="cardinfo-box-body">
            <Editable text={values.title} placeholder={'enter title'}
            buttonText="Set title" default={'abc'}
            onSubmit={(value) => setValues({...values,title:value})}
            />
            </div>    
        </div>

        <div className="cardinfo-box">
                <div className="cardinfo-box-title">
                    Description
                </div>
            <div className="cardinfo-box-body">
            <Editable text={values.desc} placeholder={'enter description'}
            buttonText="Add Description" default={values.desc}
            onSubmit={(value) => setValues({...values,desc:value})}
            />           
            </div>
        </div>

        <div className="cardinfo-box">
                <div className="cardinfo-box-title">
                    Labels
                </div>
                <div className="cardinfo-box-labels">
                    {
                        values.labels?.map((item,index) =><Chip onClose={() =>removeLabel(item.text)} 
                        key={item.text+index}
                        color={item.color} 
                        text = {item.text}
                        close ={true}/>)
                    }
                </div>
                <div className="cardinfo-box-colors">
            {
                colors.map((item,index) =><li key={index} style={{backgroundColor:item}} 
                className={item === activeColor ? "active" : ""}
                onClick={() => setActiveColor(item)}
                />)
            }
        </div>
            <div className="cardinfo-box-body">
            <Editable text="Add Label" placeholder={'enter label name'} buttonText="Add Label" 
             onSubmit={(value) => addLabel(value,activeColor)}/>          
            </div>
        </div>
        </div>
        </Modal>
  )
}

export default Cardinfo

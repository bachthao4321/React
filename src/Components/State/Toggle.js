import React, {useState} from 'react'
import './ToggleStyle.css'

function Toggle() {
    const [on, setOn] = useState(false);
    const handleToggle = () => {
        setOn((prev) => !prev);
    };
    return (
        <>
        <div className={`toggle ${on ? 'active' : ""}`} onClick={handleToggle}>
            <div className={`spinner ${on ? 'active': ""}`} onClick={handleToggle}></div>
        </div>
        {/* <div className="toggle-control">
            <div className='toggle-on' onClick={() => setOn(true)}>
            On
            </div>
            <div className="toggle-off" onClick={() => setOn(false)}>
            Off
            </div>
        </div> */}
        </>
    )
}

export default Toggle;
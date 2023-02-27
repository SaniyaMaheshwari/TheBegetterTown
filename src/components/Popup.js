import React from 'react';
function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
      {/* <button type="button" class="close" className='close-btn' data-dismiss="modal" aria-label="Close" onClick={()=> props.setTrigger(false)}></button> */}
        <button className='close-btn' onClick={()=> props.setTrigger(false)}>Close</button>
        {props.children}
      </div>
    </div>
  ): "";
}

export default Popup;

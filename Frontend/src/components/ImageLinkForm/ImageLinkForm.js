import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return(
        <div>
        <p className='f3 ma3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try!'}
        </p>
        <div className='center'>
        <div className="pa4 br3 shadow-5 center form">
        <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
        <button className='w-30 grow f4 link ph3 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
        </div>
        </div>
        </div>
)}

export default ImageLinkForm;
import React from 'react';
import './HomeSlider.css';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function BtnSlider ({direction , moveSlide}){
   
    return (
        <button 
        onClick={moveSlide} 
        className={direction === 'nextt' ? 'btn-slide nextt' : 'btn-slide prev'}>
          <img src={direction === 'nextt' ? rightArrow : leftArrow} alt='' />
        </button>
    );
}
import React , { useState } from 'react';
import './carousel.css'
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';

const HomeSlider = () => {

    const[slideIndex , setSlideIndex] =useState(1)
     const nextSlide =()=>{
         if (slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
         }
         else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
         }
     }
     const prevSlide =()=>{
         if(slideIndex!==1){
            setSlideIndex(slideIndex - 1)
         }
         else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
         }
     }
     const moveDot = index =>{
        setSlideIndex(index)
     }

    return ( 
        <div class="container-slider">
        {dataSlider.map((obj , index)=>{
            return(
                <div key={obj.id} 
                className={slideIndex === index + 1 ? "slide active-anim" : 'slide'}>
                    <img
                    src={process.env.PUBLIC_URL + `/Imgs/Sliders/HomeSliderTop/img${index + 1}.jpg`}
                    alt=" "
                    />
                    <h3>{obj.title}</h3>
                </div>
            )
        })}

<BtnSlider moveSlide={nextSlide} direction={'nextt'} />
       <BtnSlider moveSlide={prevSlide} direction={'prev'} />
       <div className='container-dots'>
            {Array.from({length:5}).map((item , index) =>(
                <div
                onClick={() => moveDot(index + 1)} 
                className={slideIndex === index + 1 ? 'dot-active' : 'dot'}>

                </div>
            ))}
       </div>

        </div>
       
     );
}
 
export default HomeSlider;
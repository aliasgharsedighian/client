import './HomeSlider.css'
import dataSlider from './dataSlider';


export default function HomeSliderTop ()  {
    
    let slideIndex = 1;
    function setSlide(input,index){
        slideIndex =index;
        let item =document.querySelector(`#${input}`);
        let slides = [...document.querySelector('.slides').children] ;
        slides.forEach((element)=>{
            element.classList.remove('active');
        })
        item.classList.add('active');
    }
    
    setInterval(() => {
        slideIndex +=1;
        if(slideIndex===6){
            slideIndex=1
        }
        setSlide(`slide${slideIndex}` , slideIndex)
    }, 4000);

    // const prevSlide =()=>{
    //     if(slideIndex !==1){
    //         return (slideIndex -1)
    //     }
    //     else if(slideIndex ===1){
    //         return (slideIndex=dataSlider.length)
    //     }
    // }
    // const nextSlide =()=>{
    //     if(slideIndex !== dataSlider.length){
    //         return(slideIndex +1)
    //     }
    //     else if (slideIndex ===dataSlider.length){
    //        return (slideIndex =1)
    //     }
    // }

   
    return ( 
        <section class="slider">
        <div class="slides">
             {dataSlider.map((obj , index)=>{
                return (
                    <div key={obj.id} 
                    className={obj.className}
                    id={obj.id}> 
                        <img 
                        src={obj.images} 
                        alt="" />
                        <span>{obj.title}</span>
                    </div>
                )
             })}
            {/* <BtnSlider moveSlide={nextSlide} direction={'next'} />
            <BtnSlider moveSlide={prevSlide} direction={'prev'} /> */}
        </div>
        {/* <div className='container-dots'>
            {Array.from({length:5}).map((item , index) =>(
                <div
                onClick={() => moveDot(index + 1)} 
                className={slideIndex === index + 1 ? 'dot-active' : 'dot'}>

                </div>
            ))}
       </div> */}
       
    </section> );
}
 

// import './HomeSlider.css'
import dataSlider from './dataSlider';


export default function HomeSliderTop ()  {
    
    let slideIndex = 1;
    function setSlide(input,index){
        slideIndex =index;
        // let item =document.querySelector(`#${input}`);
        // let slides = [...document.querySelector('.slides').children] ;
        // slides.forEach((element)=>{
        //     element.classList.remove('active');
        // })
        // item.classList.add('active');
    }
    
    setInterval(() => {
        slideIndex +=1;
        if(slideIndex===6){
            slideIndex=1
        }
        setSlide(`slide${slideIndex}` , slideIndex)
    }, 4000);

   
   
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
           
        </div>
        <div className="buttons">
        {dataSlider.map((bobj , index)=>{
            
            return (
                <div className='circle-button'>
                    {bobj.circle}
                </div>
            )
            
        })}
        </div>
       
    </section> );
}
 
